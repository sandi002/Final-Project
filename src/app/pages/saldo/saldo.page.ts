import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { faArrowCircleDown, faArrowCircleUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { TopupPage } from 'src/app/modals/topup/topup.page';
import { TarikPage } from 'src/app/modals/tarik/tarik.page';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
})
export class SaldoPage implements OnInit {
  saldo: any = 0;
  topup = faChevronUp;
  tarik = faChevronDown;
  arup = faArrowCircleUp;
  ardown = faArrowCircleDown;
  riwayat:any = [];

  constructor(
    private alert: AlertService,
    private loading: LoadingController,
    private getapi: GetapiService,
    public modalController: ModalController,
    private navCtrl: NavController,
    private storage: StorageService,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(5, () => {
      this.navCtrl.navigateBack(["/tabs/tab4"]);
    });
  }

  ngOnInit() {
    registerLocaleData( es );
  }

  ionViewWillEnter(){
    this.storage.getData('data').then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.updatedetail();
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

  async updatedetail(){
    const loading = await this.loading.create({message: "Tunggu sebentar..."});
    loading.present();
    this.getapi.getSaldo().subscribe(data=>{
      loading.dismiss();
      if(data['success'] == true){
        this.saldo = data['saldo'];
        this.riwayat = data['result'];
      }else{
        this.alert.presentToast("Terjadi kesalahan saat menghubungi server, coba ulangi beberapa saat lagi");
      }
    });
  }
  
  async topupSaldo(){
    const modal = await this.modalController.create({
      component: TopupPage
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      //this.alert.presentAlert("TES","ID nya: "+dataReturned);
      console.log(dataReturned['data']);
      if(dataReturned['data'] > 0){
        this.navCtrl.navigateForward(["/bayarsaldo/"+dataReturned['data']]);
      }else{
        this.ionViewWillEnter();
      }
    });
    return await modal.present();
  }
  async tarikSaldo(){
    const modal = await this.modalController.create({
      component: TarikPage
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
  bayarSaldo(id,tipe){
    if(tipe == 2){
      this.navCtrl.navigateForward(["/bayarsaldo/"+id]);
    }
  }

}
