import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../auth/auth.service';
import { LoadingController, NavController, ModalController, IonicSlides } from '@ionic/angular';
//import { faBox, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { TambahkeranjangPage } from '../modals/tambahkeranjang/tambahkeranjang.page';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { PostapiService } from '../services/postapi.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  swiperModules = [IonicSlides];
  slider:any = [];
  promo:any = [];
  blog:any = [];
  testimoni: any = [];
  //cari = faSearch;
  kategori: any = [];
  kategorippob: any = [];
  produk: any = [];
  produkd: any = [];
  produkpo: any = [];
  notif:any = 0;
  login: boolean;
  cariText: any = "";
  kategorilis: any;
  //faBox = faBox;
  //faStar = faStar;
  saldo: any = 0;
  koin: any = 0;
  usrid: any = 0;
  public didInit: boolean = false;

  constructor(
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    private router: Router,
    private auth: AuthService,
    private loading: LoadingController,
    private navCtrl: NavController,
    public modalController: ModalController
  ) {
    this.auth.getToken();
  }

  ngOnInit(){
    registerLocaleData( es );
    if(this.auth.tokenSet == true){
      this.getKatSlide();
    }else{
      this.auth.getToken();
      this.getKatSlide();
    }
  }

  ngAfterViewInit() {
      this.didInit = true;
  }

  ionViewWillEnter(){  
    this.produk = [];
    this.produkd = [];
    this.produkpo = [];
    this.login = this.auth.isLoggedIn;  
    if(this.auth.tokenSet == true){
      this.getPro();
      this.getapi.getNotif().subscribe(data=>{
        if(data['success'] == true){
          this.notif = data['chat'];
          this.saldo = data['saldo'];
          this.koin = data['koin'];
          this.usrid = data['id'];
        }else{
          this.notif = 0;
        }
      });
    }else{
      this.auth.getToken().then(data=>{
        this.getPro();
      });
    }
  }

  loadProduk(id){
    this.navCtrl.navigateForward('produks/'+id);
  }

  cariProduk(){
    localStorage.setItem("search",this.cariText);
    this.navCtrl.navigateForward('cariproduk');
  }

  getKatSlide(){
    this.getapi.getSlider().subscribe((res)=>{
      if(res['success'] == true){
        this.slider = res['result'];
      }else{
        this.alert.presentToast("gagal memuat promo");
        this.navCtrl.navigateRoot(["/getoken"]);
      }
    });

    this.getapi.getKategori().subscribe((res)=>{
      if(res['success'] == true){
        this.kategori = res['result'];
        this.kategorippob = res['resultppob'];
        /*
        var kategoriarray = [];
        for(var i=0; i<6; i++){
          if(res['result'][i] != undefined){
            kategoriarray = kategoriarray.concat(res['result'][i]);
          }
        }
        this.kategori = kategoriarray;
        */
        this.kategorilis = res['result'].length;
      }else{
        this.alert.presentToast("gagal memuat kategori");
      }
    });

    this.getapi.getPromo().subscribe((res)=>{
      if(res['success'] == true){
        this.promo = res['result'];
      }else{
        this.alert.presentToast("gagal memuat promo");
        this.navCtrl.navigateRoot(["/getoken"]);
      }
    });

    this.getapi.getTestimoni().subscribe((res)=>{
      if(res['success'] == true){
        this.testimoni = res['result'];
      }else{
        this.alert.presentToast("gagal memuat promo");
        this.navCtrl.navigateRoot(["/getoken"]);
      }
    });

    this.getapi.getBlog().subscribe((res)=>{
      if(res['success'] == true){
        this.blog = res['result'];
      }else{
        this.alert.presentToast("gagal memuat blog");
        this.navCtrl.navigateRoot(["/getoken"]);
      }
    });
  }
  async getPro(){
    const loadings = await this.loading.create({
      message: 'Memuat produk...',
      spinner: 'circular'
    });
    await loadings.present();
    this.getapi.getProduk().subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.produk = res['result'];
      }else{
        this.alert.presentToast("gagal memuat produk");
      }
    });
    this.getapi.getProdukDigital().subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.produkd = res['result'];
      }else{
        this.alert.presentToast("gagal memuat produk");
      }
    });
    this.getapi.getProdukPO().subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.produkpo = res['result'];
      }else{
        this.alert.presentToast("gagal memuat produk");
      }
    });
  }
  
  tambahKeranjang(id) {
    this.getdata().then(
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
  async getdata(){
    const token = await Preferences.get({ key: "data" });
    return token.value;
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
