import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-ppobtagihan',
  templateUrl: './ppobtagihan.page.html',
  styleUrls: ['./ppobtagihan.page.scss'],
})
export class PpobtagihanPage implements OnInit {

  jenis: any = "Sesuatu";
  nohp: any;
  produk: any = [];
  total: any = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    private navctrl: NavController,
    private loading: LoadingController
  ){
    this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    registerLocaleData( es );
  }

  async cekTagihan(){
    if(this.nohp.length > 4){
      const loadings = await this.loading.create({
        message: 'Mengecek tagihan...',
        spinner: 'circular'
      });
      loadings.present()
      //console.log('Masuk tes: '+this.nohp);
      this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
      this.getapi.getTagihanPPOB(this.jenis,this.nohp).subscribe((res)=>{
        loadings.dismiss();
        if(res['success']){
          this.produk = res['result'];
          this.total = res['result'][0]['harga'];
        }else{
          this.alert.presentAlert("Tidak ditemukan","Nomor ID Tagihan tidak ditemukan atau tagihan sudah lunas");
        }
      });
    }else{
      this.alert.presentAlert("Masukkan ID Nomor Tagihan","Nomor ID Tagihan tidak valid!");
    }
  }

  async bayar(){
    const loadings = await this.loading.create({
      message: 'Memproses pesanan...',
      spinner: 'circular'
    });

    if(typeof this.nohp != 'undefined'){
      if(this.nohp.length > 5){
        this.alert.konfirmasi("Lanjutkan pembelian?","pembelian akan langsung diproses dan saldo Anda akan langsung terpotong. Pastikan saldo Anda cukup!").then((val)=>{
          if(val.data){
            loadings.present();
            this.postapi.bayarTagihanPPOB({'nomer':this.nohp,'produk':this.jenis,'total':this.total}).subscribe((res)=>{
              loadings.dismiss();
              if(res['success']){
                this.alert.presentToast('Berhasil memproses pesanan, silahkan lanjut ke halaman pembayaran');
                this.navctrl.navigateForward(['/cekoutppob/'+res['result']]);
              }else{
                this.alert.presentAlert('Gagal memproses pembelian',res['msg']);
              }
            });
          }
        });
      }else{
        this.alert.presentAlert("Error: min.length 5","Nomor tidak valid, silahkan cek kembali nomor yang Anda masukkan sebelum klik BELI");
      }
    }else{
      this.alert.presentAlert("Error: min.length 5","Nomor tidak valid, silahkan cek kembali nomor yang Anda masukkan sebelum klik BELI");
    }
  }

}
