import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-tarik',
  templateUrl: './tarik.page.html',
  styleUrls: ['./tarik.page.scss'],
})
export class TarikPage implements OnInit {
  jumlah = 0;
  rek: any = 0;
  keterangan: any = "";
  rekening: any = [];
  rekoke;

  constructor(
    private postapi: PostapiService,
    private getapi: GetapiService,
    private loading: LoadingController,
    public modalController: ModalController,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.jumlah = 0;
    this.rek = "";
    this.keterangan = "";
    this.rekening = [];
    this.rekoke = false;
    const loadings = await this.loading.create({
      message: 'Mengunduh data rekening...',
      spinner: 'crescent'
    });
    this.rekening = [];

    await loadings.present();
    this.getapi.rekeningLoad(1,200).subscribe((data)=>{
      loadings.dismiss();
      this.rekening = data['data'];
    });
  }

  async tarik(){
    if(this.jumlah > 10000){
      if(this.rekoke == true){
        const loadings = await this.loading.create({
          message: 'Memproses penarikan...',
          spinner: 'crescent'
        });
        await loadings.present();
        this.postapi.tarikSaldo({"jumlah":this.jumlah,"idrek":this.rek,"keterangan":this.keterangan}).subscribe((res)=>{
          loadings.dismiss();
          if(res['success'] == true){
            this.alert.presentToast("Berhasil menarik saldo, tunggu sampai proses penarikan selesai diverifikasi admin");
            this.closeModal();
          }else{
            this.alert.presentAlert("Server Sibuk","gagal memproses penarikan saldo: "+res["msg"]);
          }
        });
      }else{
        this.alert.presentAlert("Pilih Rekening Tujuan","silahkan pilih rekening tujuan terlebih daulu, apabila belum ada silahkan menambahkan rekening baru");
      }
    }else{
      this.alert.presentAlert("Masukkan Jumlah Penarikan","jumlah penarikan dana minimal Rp. 10.000, tidak boleh kosong");
    }
  }

  setoke(){
    this.rekoke = true;
  }

  setJumlah(jml){
    this.jumlah = jml;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
