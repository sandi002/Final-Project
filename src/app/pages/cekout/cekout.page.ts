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
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-cekout',
  templateUrl: './cekout.page.html',
  styleUrls: ['./cekout.page.scss'],
})
export class CekoutPage implements OnInit {
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
  alamat: string;
  alamatnama: any;
  alamatnohp: any = " tunggu sebentar... ";
  alamatjudul: any;
  alamatkodepos: any;
  idkec: any;
  alamatlengkap: any;
  harga = 0;
  total = 0;
  kurang = 0;
  ongkir = 0;
  isoke = false;
  gudang: any;
  pilihongkir: any;
  pilihanongkir: any;
  idproduk: string = "";
  kuriroke: boolean;
  namakurir: string = "";
  kurirongkir: string = "";
  namapaket: string = "";
  estimasi: any = 0;
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
  indexkurir;
  isModalOpen = false;

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
      pilihongkir: [],
      ongkir: [0],
      diskon: [0],
      saldo: [0],
      alamat: [],
      metode: [1],
      berat: [],
      kurir: [],
      paket: [],
      dari: [],
      tujuan: [],
      metodebayar: [2],
      pilihmetode: [],
      voucher: [""],
      dropship: [""],
      dropshipnomer: [""],
      dropshipalamat: [""],
      idproduk: []
    });
    this.inputForm.controls['ongkir'].setValue(this.ongkir);
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
    this.alamatnohp = " tunggu sebentar... ";
    const loadings = await this.loading.create({
      message: 'Memuat detail pesanan...',
      spinner: 'circular'
    });
    await loadings.present();

    this.getapi.getBayar().subscribe(datar=>{
      if(datar['success'] == true){
        //loadings.message = "Sedang memuat perhitungan ongkos kirim";
        this.produk = datar['produk'];
        this.payment_cod = 0;
        this.biayacod = parseFloat(datar['biaya_cod']);
        this.payment_transfer = datar['payment_transfer'];
        this.payment_tripay = datar['payment_tripay'];
        this.payment_midtrans = datar['payment_midtrans'];
        this.harga = datar['totalharga'];
        this.saldo = datar['saldo'];
        this.gudang = datar['gudang'];
        this.total = this.harga;
        this.inputForm.controls['berat'].setValue(datar['berat']);

        var i;
        for(i=0; i<this.produk.length; i++){
          if(this.idproduk){
            this.idproduk = this.idproduk + '|' + this.produk[i]['id'];
          }else{
            this.idproduk = this.produk[i]['id'];
          }
        }
        this.inputForm.controls['idproduk'].setValue(this.idproduk);

        if(localStorage.getItem("alamat")){
          this.alamat = localStorage.getItem("alamat");
        }else{
          this.alamat = "utama";
        } 
        if(localStorage.getItem("voucher")){
          this.voucher = localStorage.getItem("voucher");
          this.cekVoucher();
        }else{
          this.voucher = "";
        } 
        this.loading.dismiss();

        this.getapi.alamatSingle(this.gudang,this.alamat,datar['berat']).subscribe(data => {
          this.alamatnama = data['nama'];
          this.alamatnohp = data['nohp'];
          this.alamatlengkap = data['alamat'];
          this.alamatjudul = data['judul'];
          this.alamatkodepos = data['kodepos'];
          this.idkec = data['idkec'];
          this.alamat = data['id'];
          localStorage.setItem("alamat",data['id']);
          this.inputForm.controls['alamat'].setValue(data['id']);
          this.inputForm.controls['dari'].setValue(data['dari']);
          this.inputForm.controls['tujuan'].setValue(data['idkec']);
          
          if(data['ongkir']){
            this.kuriroke = true;
            this.pilihanongkir = data['ongkir'];
          }else{
            this.kuriroke = true;
            this.ongkir = 0;
            this.isoke = false;
          }
        })
      }else{
        this.alert.presentAlert("Server Sibuk","Tunggu beberapa saat dan silahkan ulangi kembali");
      }
    });
  }

  async openVoucher(){
    const modal = await this.modalController.create({
      component: VoucherPage,
      componentProps: {
        "digital":0,
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
      "digital":0
    }).subscribe(data=>{
      if(data['success'] == true){
        this.voucheroke = true;
        this.inputForm.controls['voucher'].setValue(this.voucher);
        this.inputForm.controls['diskon'].setValue(data["diskon"]);
        this.voucherdiskon = data["diskon"];
        this.voucherdiskonmax = data["diskonmax"];
        this.vouchernama = data["nama"];
        this.total = this.harga + this.ongkir - data["diskon"];
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

  openMetode() {
    if(this.paketoke == true){
      this.selectMet.open()
    }else{
      this.alert.presentAlert("Pengiriman","Silahkan pilih kurir pengiriman terlebih dahulu");
    }
  }

  async buatPesanan(){
    const loadings = await this.loading.create({
      message: 'Sistem akan memproses pesanan, mungkin akan membutuhkan waktu sedikit lebih lama, mohon menunggu...',
      spinner: 'circular'
    });
    await loadings.present();
    
    this.postapi.bayarPesanan(this.inputForm.value).subscribe(res=>{
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
    
    this.postapi.bayarPesananWA(this.inputForm.value).subscribe(res=>{
      this.loading.dismiss();
      if(res['success']){
        localStorage.removeItem("voucher");
        this.getapi.wasapRotator().subscribe(resi =>{
          this.events.publishData("keranjang");
          this.soc.shareViaWhatsAppToReceiver(
            resi["wasap"],
            res['text'],
            null,
            null
          ).then(()=>{
            this.router.navigate(['/tabs/tab3/']);
          });
        }); 
      }else{
        this.alert.presentAlert("Gagal membuat pesanan","terjadi kesalahan saat memproses pesanan");
      }
    });
  }

  async cekOngkir(){
    var pilih = this.inputForm.value.pilihongkir.split("-");    
    this.inputForm.controls['kurir'].setValue(pilih[3]);
    this.inputForm.controls['paket'].setValue(pilih[4]);
    this.namakurir = pilih[0];
    this.namapaket = pilih[1].toLowerCase() == pilih[0].toLowerCase() ? "" : pilih[1];
    this.kurirongkir = pilih[2] > 0 ? pilih[2] : "0";
    this.estimasi = pilih[5] > 0 ? pilih[5] : 1;
    this.payment_cod = pilih[6];
    /*this.getapi.cekOngkir(this.inputForm.value.dari,this.inputForm.value.berat,this.inputForm.value.tujuan,pilih[0],pilih[1]).subscribe(res=>{
      if(res['success'] == true){*/
        this.inputForm.controls['ongkir'].setValue(parseFloat(pilih[2]));
        this.ongkir = parseFloat(pilih[2]);
        this.total = this.harga + parseFloat(pilih[2]) - this.voucherdiskon;
        var pilihs = this.inputForm.value.pilihmetode;
        if(pilihs > 0){
          this.isoke = true;
        }
        if(pilihs == 1){
          this.total = this.total + this.biayacod;
        }
        if(this.saldosip == true){
          this.bayarSaldo();
        }
        this.paketoke = true;
        this.inputForm.controls['total'].setValue(this.total);
        this.cekVoucher();
      /*}else{
        this.alert.presentToast("ongkos kirim dari ekspedisi tidak ditemukan");
      }
    });*/
  }
  kurirNasional(idx){
    const data = this.pilihanongkir[idx];
    this.indexkurir = idx;
    this.isModalOpen = false;
    this.inputForm.controls['kurir'].setValue(data['kuririd']);
    this.inputForm.controls['paket'].setValue(data['serviceid']);
    this.namakurir = data['kurir'];
    this.namapaket = data['service'];
    this.kurirongkir = data['harga'] > 0 ? data['harga'] : "0";
    this.inputForm.controls['ongkir'].setValue(parseFloat(data['harga']));
    this.ongkir = parseFloat(data['harga']);
    this.voucherdiskon = (this.ongkir < this.voucherdiskonmax) ? this.ongkir : this.voucherdiskonmax;
    this.inputForm.controls['diskon'].setValue(this.voucherdiskon);
    this.total = this.harga + parseFloat(data['harga']) - this.voucherdiskon;
    this.isoke = true;
    this.paketoke = true;
    this.inputForm.controls['total'].setValue(this.total);
    this.voucheroke = (this.voucherdiskon > 0) ? true : false;
  }
  openSelect() {
    this.isModalOpen = true;
  }
  closeSelect() {
    //this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  async pilihMetode(){
    const pilimetode = {1:"Bayar Di Tempat (COD)",2:"Transfer Manual",3:"Tripay (Virtual Account, Alfamart, dll)",4:"Midtrans (Virtual Account, Alfamart, dll)"};
    var pilih = this.inputForm.value.pilihmetode;
    this.metodetext = pilimetode[pilih];
    this.inputForm.controls['metodebayar'].setValue(pilih);
    if(pilih == 1){
      this.iscod = true;
      this.total = this.harga + this.ongkir + this.biayacod;
      this.inputForm.controls['total'].setValue(this.total);
      this.kurang = this.total - this.saldo;
    }else{
      this.iscod = false;
      this.total = this.harga + this.ongkir - this.voucherdiskon;
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
    this.total = this.harga + this.ongkir - this.voucherdiskon;

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
