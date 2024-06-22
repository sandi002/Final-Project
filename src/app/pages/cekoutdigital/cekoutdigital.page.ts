import { Component, OnInit, ViewChild } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { IonSelect } from '@ionic/angular';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { VoucherPage } from '../../modals/voucher/voucher.page';
import { faCheckCircle, faPercentage, faShippingFast, faWallet } from '@fortawesome/free-solid-svg-icons';
import { SocialSharing } from '@awesome-cordova-plugins//social-sharing/ngx';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-cekoutdigital',
  templateUrl: './cekoutdigital.page.html',
  styleUrls: ['./cekoutdigital.page.scss'],
})
export class CekoutdigitalPage implements OnInit {
  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;
  @ViewChild('metode', { static: false }) selectMet: IonSelect;

  // FONT AWESOME
  faSh = faShippingFast;
  faPc = faPercentage;
  faDompet = faWallet;
  faCek = faCheckCircle;

	public inputForm: FormGroup;
	public submitAttempt: boolean = false;
  produk: any;
  harga = 0;
  total = 0;
  kurang = 0;
  isoke = false;
  idproduk: string = "";
  payment_cod: number;
  payment_transfer: any;
  payment_tripay: any;
  payment_midtrans: any;
  metodetext: any = "Pilih metode pembayaran";
  paketoke: boolean;
  voucher: any = "kode";
  voucheroke: boolean = false;
  vouchernama = "";
  voucherdiskon = 0;
  voucherdiskonmax = 0;
  iscod;
  biayacod = 0;
  saldo = 0;
  bayarmetode = 1;
  saldoke;
  saldosip;
  saldokosong: boolean;
  saldokurang: boolean;

  constructor(
    private loading: LoadingController,
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    private router: Router,
    private soc: SocialSharing,
    private events: EventsService
  ) {
    this.inputForm = formBuilder.group({
      total: [0],
      diskon: [0],
      saldo: [0],
      metode: [1],
      metodebayar: [2],
      pilihmetode: [],
      voucher: [""],
      idproduk: []
    });
  }

  ngOnInit() {
    registerLocaleData( es );
  }

  async ionViewWillEnter(){
    //this.inputForm.controls['pilihongkir'].setValue("");
    //this.kuriroke = false;
    //this.isoke = false;
    //this.iscod = false;
    //this.ongkir = 0;
    const loadings = await this.loading.create({
      message: 'Memuat detail pesanan...',
      spinner: 'circular'
    });
    await loadings.present();

    this.getapi.getBayarDigital().subscribe(datar=>{
      if(datar['success'] == true){
        //loadings.message = "Sedang memuat perhitungan ongkos kirim";
        this.produk = datar['produk'];
        this.payment_transfer = datar['payment_transfer'];
        this.payment_tripay = datar['payment_tripay'];
        this.payment_midtrans = datar['payment_midtrans'];
        this.harga = datar['totalharga'];
        this.saldo = datar['saldo'];
        this.total = this.harga;

        var i;
        for(i=0; i<this.produk.length; i++){
          if(this.idproduk){
            this.idproduk = this.idproduk + '|' + this.produk[i]['id'];
          }else{
            this.idproduk = this.produk[i]['id'];
          }
        }
        this.inputForm.controls['idproduk'].setValue(this.idproduk);
        if(localStorage.getItem("voucher")){
          this.voucher = localStorage.getItem("voucher");
          this.cekVoucher();
        }else{
          this.voucher = "";
        } 
        this.loading.dismiss();

      }else{
        this.alert.presentAlert("Server Sibuk","Tunggu beberapa saat dan silahkan ulangi kembali");
      }
    });
  }

  async openVoucher(){
    const modal = await this.modalController.create({
      component: VoucherPage,
      componentProps: {
        "digital":1,
        "ongkir":this.inputForm.value.ongkir,
        "harga":this.harga,
      }
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      this.ionViewWillEnter();
    });
    return await modal.present();
  }
  async cekVoucher(){
    this.postapi.cekVoucher({
      "kode":this.voucher,
      "ongkir":this.inputForm.value.ongkir,
      "harga":this.harga,
      "digital":1
    }).subscribe(data=>{
      if(data['success'] == true){
        this.voucheroke = true;
        this.inputForm.controls['voucher'].setValue(this.voucher);
        this.inputForm.controls['diskon'].setValue(data["diskon"]);
        this.voucherdiskon = data["diskon"];
        this.voucherdiskonmax = data["diskonmax"];
        this.vouchernama = data["nama"];
        this.total = this.harga - data["diskon"];
        if(this.inputForm.value.pilihmetode == 1){
          this.total = this.total + this.biayacod;
          this.iscod = true;
        }
        this.inputForm.controls['total'].setValue(this.total);
      }else{
        this.voucheroke = false;
        this.voucher = "";
        localStorage.removeItem("voucher");
      }
    });
  }
  //this.alert.presentToast("Voucher telah berhasil dipasang, silahkan menikmati diskon dari pembelian Anda.");

  openSelect() {
    this.selectRef.open()
  }
  openMetode() {
    this.selectMet.open()
  }

  async buatPesanan(){
    const loadings = await this.loading.create({
      message: 'Sistem akan memproses pesanan, mungkin akan membutuhkan waktu sedikit lebih lama, mohon menunggu...',
      spinner: 'circular'
    });
    await loadings.present();
    
    this.postapi.bayarPesananDigital(this.inputForm.value).subscribe(res=>{
      this.loading.dismiss();
      if(res['success']){
        localStorage.removeItem("voucher");
        if(res['status'] > 0){
          this.router.navigate(['/tabs/tab3/']);
        }else{
          this.router.navigate(['/bayarpesanan/'+res['inv']]);
        }
        this.events.publishData("keranjang");
      }else{
        this.alert.presentAlert("Gagal membuat pesanan","terjadi kesalahan saat memproses pesanan");
      }
    });
  }

  async buatPesananWA(){
    const loadings = await this.loading.create({
      message: 'Sistem akan memproses pesanan, mungkin akan membutuhkan waktu sedikit lebih lama, mohon menunggu...',
      spinner: 'circular'
    });
    await loadings.present();
    
    this.postapi.bayarPesananWADigital(this.inputForm.value).subscribe(res=>{
      this.loading.dismiss();
      if(res['success']){
        localStorage.removeItem("voucher");
        this.getapi.wasapRotator().subscribe(resi =>{
          this.soc.shareViaWhatsAppToReceiver(
            resi["wasap"],
            res['text'],
            null,
            null
          ).then(()=>{
            this.router.navigate(['/tabs/tab3/']);
          });
        });
        this.events.publishData("keranjang");
      }else{
        this.alert.presentAlert("Gagal membuat pesanan","terjadi kesalahan saat memproses pesanan");
      }
    });
  }
  async pilihMetode(){
    const pilimetode = {1:"Bayar Di Tempat (COD)",2:"Transfer Manual",3:"Tripay (Virtual Account, Alfamart, dll)",4:"Midtrans (Virtual Account, Alfamart, dll)"};
    var pilih = this.inputForm.value.pilihmetode;
    this.metodetext = pilimetode[pilih];
    this.inputForm.controls['metodebayar'].setValue(pilih);
    if(pilih == 1){
      this.iscod = true;
      this.total = this.harga + this.biayacod;
      this.inputForm.controls['total'].setValue(this.total);
      this.kurang = this.total - this.saldo;
    }else{
      this.iscod = false;
      this.total = this.harga - this.voucherdiskon;
      this.kurang = this.total - this.saldo;
      this.inputForm.controls['total'].setValue(this.total);
    }
    this.isoke = true;
  }

  bayarSaldo(){
    this.saldokurang = false;
    this.bayarmetode = 1;
    this.saldokosong = false;
    this.saldoke = false;
    this.saldosip = false;
    this.isoke = false;
    this.inputForm.controls['metodebayar'].setValue(0);
    this.inputForm.controls['pilihmetode'].setValue(0);
    this.inputForm.controls['metode'].setValue(1);
    this.metodetext = "Pilih metode pembayaran";
    this.total = this.harga - this.voucherdiskon;

    if(this.saldo > 0){
      this.inputForm.controls['metode'].setValue(2);
      this.saldosip = true;
      this.saldoke = true;
      if(this.saldo >= this.total){
        this.bayarmetode = 0;
        this.isoke = true;
        this.inputForm.controls['saldo'].setValue(this.total);
      }else{
        this.inputForm.controls['saldo'].setValue(this.saldo);
        this.saldokurang = true;
        this.bayarmetode = 1;
        this.isoke = false;
        this.kurang = this.total - this.saldo;
      }
    }else{
      this.saldokosong = true;
      this.bayarmetode = 1;
      this.isoke = false;
      this.saldosip = true;
    }
  }

}
