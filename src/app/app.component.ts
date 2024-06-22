import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet,{static:false}) routerOutlet: IonRouterOutlet;
  
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private platform: Platform,
    private fcmService: FcmService
    ) {
      this.fcmService.initPush();

      this.platform.backButton.subscribeWithPriority(10, () => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else if (this.router.url === '/') {
          navigator['app'].exitApp()
        } else {
          this.presentAlertConfirm()
        }
      });
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Keluar Aplikasi',
      message: 'Anda akan keluar dari aplikasi?',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Oke',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp()
          }
        }
      ]
    });

    await alert.present();
  }
}
