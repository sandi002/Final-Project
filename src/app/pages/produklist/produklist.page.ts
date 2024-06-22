import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { StorageService } from 'src/app/services/storage.service';
import { TambahkeranjangPage } from '../../modals/tambahkeranjang/tambahkeranjang.page';

@Component({
  selector: 'app-produklist',
  templateUrl: './produklist.page.html',
  styleUrls: ['./produklist.page.scss'],
})
export class ProduklistPage implements OnInit {
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

    this.getapi.getProdukKategori(id,this.page).subscribe((res)=>{
      if (!event) {
        loadings.dismiss();
      }
      if (event) {
        event.target.complete();
      }

      if(res['success'] == true){
        this.produk = this.produk.concat(res['result']);
        this.kategori = res['kategori'];
        this.maximumPages = res['maxPage'];
      }else{
        if(res['sesihabis'] == false){
          this.kosong = true;
          this.kategori = res['kategori'];
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
