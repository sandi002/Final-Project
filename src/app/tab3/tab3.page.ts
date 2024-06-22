import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { GetapiService } from '../services/getapi.service';
import { catchError } from 'rxjs/operators';
import { PostapiService } from '../services/postapi.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  page = 1;
  maximumPages: number = 1;
  items = [];
  batalclass = "nav-item";
  prosesclass = "nav-item";
  belumclass = "nav-item active";
  selesaiclass = "nav-item";
  bg = "";
  status = 0;

  constructor(
    private alert: AlertService,
    private getapi: GetapiService,
    private router: Router,
    private loading: LoadingController,
    private postapi: PostapiService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.page = 1;
    this.items = [];
    const loadings = await this.loading.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.getdata().then(
      data => {
        loadings.dismiss();
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.loadUsers();
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
        loadings.dismiss();
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

  loadMore(event) {
    this.page++;
    
    if (this.page > this.maximumPages){
      event.target.complete();
      console.log("data dah habis bosku");
    }else{
      this.loadUsers(event);
    }
  }

  belumLoad(){
    this.page = 1;
    this.belumclass = "nav-item active";
    this.prosesclass = "nav-item";
    this.batalclass = "nav-item";
    this.selesaiclass = "nav-item";
    this.status = 0;
    this.items = [];
    this.loadUsers();
  }
  prosesLoad(){
    this.page = 1;
    this.belumclass = "nav-item";
    this.prosesclass = "nav-item active";
    this.batalclass = "nav-item";
    this.selesaiclass = "nav-item";
    this.status = 1;
    this.items = [];
    this.loadUsers();
  }
  batalLoad(){
    this.page = 1;
    this.belumclass = "nav-item";
    this.prosesclass = "nav-item";
    this.batalclass = "nav-item active";
    this.selesaiclass = "nav-item";
    this.status = 4;
    this.items = [];
    this.loadUsers();
  }
  selesaiLoad(){
    this.page = 1;
    this.belumclass = "nav-item";
    this.prosesclass = "nav-item";
    this.batalclass = "nav-item";
    this.selesaiclass = "nav-item active";
    this.status = 3;
    this.items = [];
    this.loadUsers();
  }

  async loadUsers(event?){
    const loadings = await this.loading.create({
      message: 'memuat pesanan',
      spinner: 'circular'
    });
    if (!event) {
      await loadings.present();
    }

    this.getapi.pesananLoad(this.page,this.status).subscribe(res=>{
      if (!event) {
        loadings.dismiss();
      }
      if (event) {
        event.target.complete();
      }
      if(res['success']){
        this.items = this.items.concat(res['data']);
        this.maximumPages = res['maxPage'];
      }else{
        this.alert.presentToast("terjadi kesalahan saat menghubungi server");
      }
      if(this.items.length > 0){
        this.bg = "bg";
      }else{
        this.bg = "";
      }
    });
  }

  async terimaPesanan(id){
    const loding = await this.loading.create({
      message: "mengupdate pesanan",
      spinner: "circular"
    });
    this.alert.konfirmasi("Terima pesanan","Pastikan bahwa pesanan yg diterima sudah sesuai").then(res=>{
      if(res['data'] == true){
        //this.alert.presentToast("Dihapus");
        this.page = 1;
        this.items = [];
        loding.present();
        this.postapi.terimaPesanan(id).subscribe(data=>{
          loding.dismiss();
          if(data['success']){
            this.alert.presentToast("Pesanan berhasil diselesaikan");
            this.loadUsers();
          }else{
            this.alert.presentAlert("Gagal mengupdate","Gagal mengupdate pesanan, cobalah beberapa saat lagi");
          }
        });
      }
    });
  }

  async hapusPesanan(id){
    const loding = await this.loading.create({
      message: "menghapus pesanan",
      spinner: "circular"
    });
    this.alert.konfirmasi("Hapus pesanan","Anda yakin akan menghapus/membatalkan pesanan ini?").then(res=>{
      if(res['data'] == true){
        //this.alert.presentToast("Dihapus");
        this.page = 1;
        this.items = [];
        loding.present();
        this.postapi.hapusPesanan(id).subscribe(data=>{
          loding.dismiss();
          if(data['success']){
            this.alert.presentToast("Pesanan telah dihapus/dibatalkan");
            this.loadUsers();
          }else{
            this.alert.presentAlert("Gagal menghapus/membatalkan","Gagal menghapus/membatalkan pesanan, cobalah beberapa saat lagi");
          }
        });
      }
    });
  }
}
