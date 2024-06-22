import { Component } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { AlertService } from '../services/alert.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PostapiService } from '../services/postapi.service';
import { faTrash,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  keranjang;
  items: any = [];
  digital: any = [];
  plus = faPlus;
  minus = faMinus;
  trash = faTrash;
  total: any = "0";
  totaldigital: any = "0";
  notifgudang: any = false;
  
  constructor(
    private getapi: GetapiService,
    private alert: AlertService,
    private router: Router,
    private loading: LoadingController,
    private postapi: PostapiService,
    private events: EventsService
  ) {}

  ionViewWillEnter(){
    this.getdata().then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.keranjangBelanja();
        } else {
          this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(data=>{
            if(data['data'] == true){
              this.router.navigate(['/login']);
            }else{
              this.router.navigate(['/']);
            }
          });
        }
      },
      error => {
        this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(data=>{
          if(data['data'] == true){
            this.router.navigate(['/login']);
          }else{
            this.router.navigate(['/']);
          }
        });
      }
    );
  }
  async getdata(){
    const token = await Preferences.get({ key: "data" });
    return token.value;
  }

  async keranjangBelanja(){
    const loadings = await this.loading.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.getapi.getKeranjang().subscribe(data=>{
      setTimeout(()=>{ loadings.dismiss() },1000);
      if(data["success"] == true){
        this.items = data["fisik"];
        this.digital = data["digital"];
        this.total = data["totalfisik"];
        this.totaldigital = data["totaldigital"];
        if(data['gudangtot'] > 1){
          this.notifgudang = true;
        }else{
          this.notifgudang = false;
        }
      }else{
        this.notifgudang = false;
        this.items = [];
        this.digital = [];
        this.total = 0;
        this.totaldigital = 0;
        //this.alert.presentAlert("Error","Terjadi kendala saat memuat keranjang belanja, silahkan logout dari aplikasi dan login kembali");
      }
    });
  }

  hapusKeranjang(id){
    this.alert.konfirmasi("Yakin menghapus?","Produk akan dihapus dari keranjang belanja Anda").then(data=>{
      if(data.data == true){
        this.hapusSekarang(id);
      }
    });
  }

  async hapusSekarang(id){
    const loadings = await this.loading.create({
      message: 'Menghapus produk...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.postapi.hapusKeranjang(id).subscribe(data=>{
      loadings.dismiss();
      this.ionViewWillEnter();
      this.events.publishData("keranjang");
    })
  }

  async tambah(idx){
    const loadings = await this.loading.create({
      message: 'Mengupdate keranjang...',
      spinner: 'crescent'
    });
    await loadings.present();

    var jml = parseFloat(this.items[idx]['jumlah']) + 1;
    var datas = {"update":this.items[idx]['id'],"jumlah":jml};
    this.postapi.updateKeranjang(datas).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.items[idx]['jumlah'] = jml;
        this.ionViewWillEnter();
      }else{
        this.items[idx]['jumlah'] = data['stok'];
        this.alert.presentAlert("Stok tidak cukup","Mohon maaf, stok produk saat ini tersisa "+data['stok']+"pcs saja").then(()=>{
          this.ionViewWillEnter();
        });
      }
      this.events.publishData("keranjang");
    });
    //console.log(this.items[idx]['jumlah']);
  }
  async kurang(idx){
    const loadings = await this.loading.create({
      message: 'Mengupdate keranjang...',
      spinner: 'crescent'
    });
    await loadings.present();

    var jml = parseFloat(this.items[idx]['jumlah']) - 1;
    if(jml > 0){
      var datas = {"update":this.items[idx]['id'],"jumlah":jml};
      this.postapi.updateKeranjang(datas).subscribe(data=>{
        loadings.dismiss();
        if(data['success'] == true){
          this.items[idx]['jumlah'] = jml;
          this.ionViewWillEnter();
        }else{
          this.items[idx]['jumlah'] = data['stok'];
          this.alert.presentAlert("Stok tidak cukup","Mohon maaf, stok produk saat ini tersisa "+data['stok']+"pcs saja").then(()=>{
            this.ionViewWillEnter();
          });
        }
        this.events.publishData("keranjang");
      });
    }else{
      loadings.dismiss();
      this.hapusKeranjang(this.items[idx]['id']);
    }
    //console.log(this.items[idx]['jumlah']);
  }

  async tambahDigital(idx){
    const loadings = await this.loading.create({
      message: 'Mengupdate keranjang...',
      spinner: 'crescent'
    });
    await loadings.present();

    var jml = parseFloat(this.digital[idx]['jumlah']) + 1;
    var datas = {"update":this.digital[idx]['id'],"jumlah":jml};
    this.postapi.updateKeranjang(datas).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.digital[idx]['jumlah'] = jml;
        this.ionViewWillEnter();
      }else{
        this.digital[idx]['jumlah'] = data['stok'];
        this.alert.presentAlert("Stok tidak cukup","Mohon maaf, stok produk saat ini tersisa "+data['stok']+"pcs saja").then(()=>{
          this.ionViewWillEnter();
        });
      }
      this.events.publishData("keranjang");
    });
    //console.log(this.digital[idx]['jumlah']);
  }
  async kurangDigital(idx){
    const loadings = await this.loading.create({
      message: 'Mengupdate keranjang...',
      spinner: 'crescent'
    });
    await loadings.present();

    var jml = parseFloat(this.digital[idx]['jumlah']) - 1;
    if(jml > 0){
      var datas = {"update":this.digital[idx]['id'],"jumlah":jml};
      this.postapi.updateKeranjang(datas).subscribe(data=>{
        loadings.dismiss();
        if(data['success'] == true){
          this.digital[idx]['jumlah'] = jml;
          this.ionViewWillEnter();
        }else{
          this.digital[idx]['jumlah'] = data['stok'];
          this.alert.presentAlert("Stok tidak cukup","Mohon maaf, stok produk saat ini tersisa "+data['stok']+"pcs saja").then(()=>{
            this.ionViewWillEnter();
          });
        }
        this.events.publishData("keranjang");
      });
    }else{
      loadings.dismiss();
      this.hapusKeranjang(this.digital[idx]['id']);
    }
    //console.log(this.digital[idx]['jumlah']);
  }

}
