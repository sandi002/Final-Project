import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-cekoutppob',
  templateUrl: './cekoutppob.page.html',
  styleUrls: ['./cekoutppob.page.scss'],
})
export class CekoutppobPage implements OnInit {

  icon;
  kategori;
  nama;
  bayar;
  nomer;
  invoice;
  status;
  saldo: any = 0;
  koin: any = 0;
  saldokoin: any = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    private navctrl: NavController,
    private loading: LoadingController
  ) {
    this.invoice = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    registerLocaleData( id );
  }

  ionViewWillEnter(){
    this.getData();
  }

  async getData(){
    const loadings = await this.loading.create({
      message: 'Memproses pesanan...',
      spinner: 'circular'
    });
    loadings.present();

    this.getapi.getNotif().subscribe(data=>{
      if(data['success'] == true){
        this.saldo = data['saldo'];
        this.saldokoin = data['koin'];
      }
    });

    this.invoice = this.activatedRoute.snapshot.paramMap.get('id');
    this.getapi.getTransaksiPPOB(this.invoice).subscribe((res)=>{
      loadings.dismiss();
      if(res['success']){
        var data = res['result'];
        this.bayar = data.bayar;
        this.kategori = data.kategori;
        this.nomer = data.nomer;
        this.icon = data.icon;
        this.nama = data.produk.nama;
        this.status = data.status;
      }else{
        this.alert.presentToast('Gagal mengambil data transaksi');
      }
    });
  }

  async bayarSekarang(){
    const loadings = await this.loading.create({
      message: 'Memproses pesanan...',
      spinner: 'circular'
    });

    this.invoice = this.activatedRoute.snapshot.paramMap.get('id');
    this.alert.konfirmasi("Lanjutkan pembayaran?","Pembayaran pesanan akan langsung memotong saldo Anda, jadi pastikan saldo Anda mencukupi").then((val)=>{
      this.koin = (this.koin) ? 1 : 0;
      if(val.data){
        this.postapi.bayarPPOB({'trx':this.invoice,'koin':this.koin}).subscribe((res)=>{
          if(res['success']){
            this.alert.presentAlert("Berhasil","Pembayaran telah kami terima, pesanan Anda langsung diproses oleh sistem").then(()=>{
              this.navctrl.navigateBack(['/ppoblist']);
            });
          }else{
            this.alert.presentAlert("Gagal melanjutkan pembayaran",res['msg']);
          }
        })
      }
    });

  }

}
