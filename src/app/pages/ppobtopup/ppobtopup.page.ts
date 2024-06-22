import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-ppobtopup',
  templateUrl: './ppobtopup.page.html',
  styleUrls: ['./ppobtopup.page.scss'],
})
export class PpobtopupPage implements OnInit {

  jenis: any = "Sesuatu";
  nohp: any;
  catpulsa = [
    [1, "Telkomsel", "telkomsel", "telkomsel.png", ["0811", "0812", "0813", "0821", "0822", "0823", "0852", "0853", "0851"]],
    [2, "Indosat", "indosat", "indosat.png", ["0814", "0815", "0816", "0855", "0856", "0857", "0858"]],
    [3, "XL", "xl", "xl.png", ["0817", "0818", "0819", "0859", "0877", "0878"]],
    [4, "Tri", "tri", "tri.png", ["0895", "0896", "0897", "0898", "0899"]],
    [5, "Axis", "axis", "axis.png", ["0838", "0831", "0832", "0833"]],
    [6, "Smartfren", "smartfren", "smartfren.png", ["0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", "0889"]],
    [7, "Bolt", "bolt", "bolt.png", ["9991", "9992", "9993", "9994", "9995", "9996", "9997", "9998"]]
  ];
  produk: any = [];
  brand: any = "telkomsel";
  skeleton = false;
  produkselect: any;
  total: any = 0;
  pilihanbrand: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    private navctrl: NavController,
    private loading: LoadingController
  ) {
    this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    registerLocaleData( es );
  }

  ionViewWillEnter(){
    this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
    this.getapi.getBrandPPOB(this.jenis).subscribe((res)=>{
      if(res['success']){
        this.pilihanbrand = res['result'];
      }else{
        this.pilihanbrand = [];
      }
    });
  }

  cekNomer(){
    this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.jenis == "Pulsa"){
      //console.log('Tetes: '+this.nohp.toString());
      if(this.nohp.length < 4){
        this.produk = [];
        //onsole.log('Masuk tes: '+this.nohp);
      }
      if(this.nohp.length >= 4){
        var nomors = this.nohp.substring(0,4);
        this.catpulsa.forEach((cvalue:Array<any>) => {
          /*console.log(cvalue[4]);*/
          if (cvalue[4].includes(nomors)) {
            this.brand = cvalue[2];
            this.getProduk(cvalue[2]);
          }
        });
      }
    }
  }

  selectProduk(idx){
    this.total = parseFloat(this.produk[idx]['harga']);
    this.produkselect = this.produk[idx]['id'];
  }

  cekHarga(){
    this.getProduk(this.brand);
  }
  getProduk(brand){
    this.produk = [];
    this.total = 0;
    this.skeleton = true;
    this.jenis = this.activatedRoute.snapshot.paramMap.get('id');
    this.getapi.getProdukPPOB(this.jenis,brand).subscribe((res)=>{
      if(res['success']){
        this.produk = res['result'];
      }
      this.skeleton = false;
    });
  }

  async beliProduk(){
    const loadings = await this.loading.create({
      message: 'Memproses pesanan...',
      spinner: 'circular'
    });

    if(typeof this.nohp != 'undefined'){
      if(this.nohp.length > 8){
        this.alert.konfirmasi("Lanjutkan pembelian?","pembelian akan langsung diproses dan saldo Anda akan langsung terpotong. Pastikan saldo Anda cukup!").then((val)=>{
          if(val.data){
            loadings.present();
            this.postapi.beliTopupPPOB({'nomer':this.nohp,'produk':this.produkselect}).subscribe((res)=>{
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
        this.alert.presentAlert("Error: min.length 8","Nomor tidak valid, silahkan cek kembali nomor yang Anda masukkan sebelum klik BELI");
      }
    }else{
      this.alert.presentAlert("Error: min.length 8","Nomor tidak valid, silahkan cek kembali nomor yang Anda masukkan sebelum klik BELI");
    }
  }

}
