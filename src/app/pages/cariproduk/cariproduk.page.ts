import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { TambahkeranjangPage } from '../../modals/tambahkeranjang/tambahkeranjang.page';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cariproduk',
  templateUrl: './cariproduk.page.html',
  styleUrls: ['./cariproduk.page.scss'],
})
export class CariprodukPage implements OnInit {
  cari: any = localStorage.getItem("search");
  produk = [];
  page = 1;
  maximumPages: number = 1;
  id: any = 0;
  kategori: any;
  kosong: boolean = false;

  constructor(
    private storage: StorageService,
    private router: Router,
    private loading: LoadingController,
    private alert: AlertService,
    private getapi: GetapiService,
    private navCtrl: NavController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.page = 1;
    this.produk = [];
    this.getPro(this.id);
  }

  loadMore(event) {
    this.page++;
    
    if (this.page > this.maximumPages){
      event.target.disabled = true;
      console.log("data dah habis bosku");
    }else{
      this.getPro(this.id,event);
    }
  }

  loadProduk(id){
    this.navCtrl.navigateForward('produks/'+id);
  }

  async getPro(id,event?){
    const loadings = await this.loading.create({
      message: 'Memuat produk...',
      spinner: 'crescent'
    });
    if (!event) {
      await loadings.present();
    }

    this.getapi.cariProduk(this.cari,this.page).subscribe((res)=>{
      if (!event) {
        loadings.dismiss();
      }
      if (event) {
        event.target.complete();
      }

      if(res['success'] == true){
        this.produk = this.produk.concat(res['result']);
        this.maximumPages = res['maxPage'];
      }else{
        if(res['sesihabis'] == false){
          this.kosong = true;
        }else{
          this.alert.presentToast("gagal memuat produk");
        }
      } 
    },
    error=>{
      loadings.dismiss();
    });
  }
  
  tambahKeranjang(id) {
    this.storage.getData('data').then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.addKrj(id);
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

  async addKrj(id){
    const modal = await this.modalController.create({
      component: TambahkeranjangPage,
      cssClass: 'tambahkeranjang',
      componentProps: {
        "id": id,
      }
    });
    return await modal.present();
  }
}
