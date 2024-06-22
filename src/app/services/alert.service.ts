import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastController: ToastController,
    private alertCtrl: AlertController
  ) { }

  async presentToast(message: any,position: any = 'top') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
      color: 'dark'
    });
    toast.present();
  }

  async presentAlert(hider,pesan:any) {
    let alert = await this.alertCtrl.create({
      header: hider,
      message: pesan,
      cssClass: "alert-confirm",
      buttons: ['Dismiss']
    });
    alert.present();
  }

  async konfirmasi(title, message) {
    let choice
    const alert = await this.alertCtrl.create({
        header: title,
        message: message,
        cssClass: "alert-confirm",
        buttons: [{
            text: 'BATAL',
            cssClass: 'batal',
            handler: () => {
                alert.dismiss(false);
                return false;
            }
        },{
            text: 'OKE',
            cssClass: 'oke',
            handler: () => {
                alert.dismiss(true)
                return false
            }
        }]
    });

    choice = false;
    await alert.present();
    await alert.onDidDismiss().then((data) => {
        choice = data
    })
    return choice
  }
}
