import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.page.html',
  styleUrls: ['./voucher.page.scss'],
})
export class VoucherPage implements OnInit {
  item: any = [];
  kode: any = "";
  digital: any = 0;
  ongkir: any = 0;
  harga: any = 0;

  constructor(
    private getapi: GetapiService,
    private postapi: PostapiService,
    private modalController: ModalController,
    private loading: LoadingController,
    private alert: AlertService
  ) { }

  ngOnInit() {
    registerLocaleData( es );
  }

  ionViewWillEnter(){
    this.getVoucher();
  }

  async getVoucher(){
    const loadings = await this.loading.create({
      message: 'Memuat penawaran promo...',
      spinner: 'circular'
    });
    await loadings.present();

    this.getapi.getVoucher(this.digital).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.item = data["result"];
      }
    });
  }

  async cekVoucher(){
    const loadings = await this.loading.create({
      message: 'Tunggu sebentar...',
      spinner: 'circular'
    });
    await loadings.present();

    this.postapi.cekVoucher({"kode":this.kode,"digital":this.digital,"harga":this.harga,"ongkir":this.ongkir}).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.alert.presentToast("Voucher telah berhasil dipasang, silahkan menikmati diskon dari pembelian Anda.");
        localStorage.setItem("voucher",this.kode);
        this.closeModal();
      }else{
        localStorage.removeItem("voucher");
        this.alert.presentAlert("Voucher Tidak Berlaku","Kode voucher salah atau penggunaan voucher telah melebihi batas maksimum sehingga sudah tidak berlaku lagi");
      }
    });
  }

  async cekode(kode){
    const loadings = await this.loading.create({
      message: 'Tunggu sebentar...',
      spinner: 'circular'
    });
    await loadings.present();

    this.postapi.cekVoucher({"kode":kode,"digital":this.digital,"harga":this.harga,"ongkir":this.ongkir}).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.alert.presentToast("Voucher telah berhasil dipasang, silahkan menikmati diskon dari pembelian Anda.");
        localStorage.setItem("voucher",kode);
        this.closeModal();
      }else{
        localStorage.removeItem("voucher");
        this.alert.presentAlert("Voucher Tidak Berlaku","Kode voucher salah atau penggunaan voucher telah melebihi batas maksimum sehingga sudah tidak berlaku lagi");
      }
    });
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
