import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {
  jumlah = 0;
  id = 0;

  constructor(
    private postapi: PostapiService,
    private loading: LoadingController,
    public modalController: ModalController,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  async topup(){
    const loadings = await this.loading.create({
      message: 'Memproses topup...',
      spinner: 'crescent'
    });
    await loadings.present();
    this.postapi.topupSaldo({"jumlah":this.jumlah}).subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.id = res['idbayar'];
        this.alert.presentToast("Berhasil topup saldo, tunggu sampai proses topup selesai diverifikasi admin");
        this.closeModal();
      }else{
        this.alert.presentAlert("Server Sibuk","gagal memproses topup saldo");
      }
    });
  }

  setJumlah(jml){
    this.jumlah = jml;
  }

  async closeModal() {
    await this.modalController.dismiss(this.id);
  }

}
