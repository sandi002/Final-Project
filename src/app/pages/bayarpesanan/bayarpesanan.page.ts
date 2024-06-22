import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';
import { AlertService } from 'src/app/services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import { PostapiService } from 'src/app/services/postapi.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Clipboard } from '@capacitor/clipboard';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { LoadingController, Platform, NavController, ActionSheetController, ToastController } from '@ionic/angular';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-bayarpesanan',
  templateUrl: './bayarpesanan.page.html',
  styleUrls: ['./bayarpesanan.page.scss'],
})
export class BayarpesananPage implements OnInit {
  cek = faCheckCircle;
  copy = faCopy;
  id: string;
  total: any;
  rekening: any = [];
  jenis: any = 0;
  channel: any;
  kode: any;
  nama: any;
  idbayar: any;
  tipe: any;
  payment_transfer: any = 0;
  payment_ipaymu: any = 0;
  payment_midtrans: any = 0;
  midtrans_cek: any = null;
  midtrans_cek_status: any = "failed";
  kadaluarsa: any;
  metode: any;
  tripay_ref: any = "";
  tripay_channel: any;
  tripay: any;
  metode_bayar: any = "";
  tripayoptions: any = "";
  tripay_metode: any;
  bukti: any = "";
  imageURI:any;
  imageFileName:any;
  GetImageNameUpload:any;
  tripayoptionslogo: any;


  constructor(
    private getapi: GetapiService,
    private postapi: PostapiService,
    private alert: AlertService,
    private loadingCtrl: LoadingController,
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private navCtrl: NavController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private api: UploadService,
  ) { }

  ngOnInit() {
    registerLocaleData( es );
    this.platform.backButton.subscribeWithPriority(0,() => {
        // do nothing here
        //this.alert.presentToast("Terpijet");
        this.navCtrl.navigateBack("/tabs/tab3");
    });
  }

  async ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let loading = await this.loadingCtrl.create({
      message: 'tunggu sebentar',
      spinner: 'circular'
    });
    await loading.present();

    this.getapi.getBayarDetail(this.id).subscribe(res=>{
      loading.dismiss();
      if(res['data']){
        //this.jenis = (res['data']['ipaymu_tipe'] == "") ? 2 : 1;
        this.total = this.formUang(res['data']['total']);
        this.bukti = res['data']['konfirmasi'];
        this.rekening = res['data']['rekening'];
        this.channel = res['data']['ipaymu_channel'];
        this.kode = res['data']['ipaymu_kode'];
        this.nama = res['data']['ipaymu_nama'];
        this.tipe = res['data']['ipaymu_tipe'];
        this.idbayar = res['data']['id'];
        this.metode = res['data']['metode'];
        this.kadaluarsa = res['data']['kadaluarsa'];
        this.payment_transfer = res['data']['payment_transfer'];
        this.payment_ipaymu = res['data']['payment_ipaymu'];
        this.payment_midtrans = res['data']['payment_midtrans'];
        this.tripay_ref = res['data']['tripay_ref'];
        this.tripay_metode = res['data']['tripay_metode'];
        this.tripay_channel = res['data']['tripay_channel'];
        this.tripay = res['data']['tripay'];
        this.midtrans_cek = res['data']['midtrans_cek']['data'];
        this.midtrans_cek_status = res['data']['midtrans_cek']['status'];
        if(this.tripay_ref != ""){
          var to = res["data"]["tripay_pilih_metode"];
          this.tripayoptions = to[res["data"]["tripay_metode"]]['nama'];
          this.tripayoptionslogo = to[res["data"]["tripay_metode"]]['logo'];
          // /console.log(this.tripayoptions);
        }
      }
    });
  }
  formUang(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  ubahPembayaran(){
    this.midtrans_cek = null;
  }

  pilihMetode(kode){
    this.metode_bayar = kode;
  }
  async copyVA(){
    await Clipboard.write({
      string: this.tripay['pay_code']
    });
    this.alert.presentToast("Berhasil menyalin Kode Pembayaran",'bottom');
  };
  async bayarTripay(){
    if(this.metode_bayar != ""){
      let loading = await this.loadingCtrl.create({
        message: 'memproses pembayaran, tunggu sebentar',
        spinner: 'circular'
      });
      await loading.present();

      this.postapi.bayarTripay({"id":this.id,"metode":this.metode_bayar}).subscribe(res=>{
        loading.dismiss();
        if(res["success"] == true){
          this.ionViewWillEnter();
        }else{
          this.alert.presentAlert("Pembayaran Gagal","Gagal melanjutkan proses pembayaran pesanan, silahkan cek kembali koneksi Anda atau hubungi admin apabila terjadi kendala ini berulang kali");
        }
      });
    }else{
      this.alert.presentAlert("PERHATIAN","Pilih metode pembayaran terlebih dahulu sebelum melanjutkan proses pembayaran pesanan");
    }
  }

  otomatis(){
    this.jenis = 1;
  }
  manual(){
    this.jenis = 2;
  }
  
  async presentActionSheet() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Photos Photo',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
 
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }
 
  async addImage(source: CameraSource) {
    let loading = await this.loadingCtrl.create({
      message: 'mengupload bukti transfer, tunggu sebentar',
      spinner: 'circular'
    });
    await loading.present();

    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });
 
    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = 'Give me a name';
 
    this.api.uploadKonfirmasi(blobData, this.id, image.format).subscribe(newImage => {
      //this.images.push(newImage);
      loading.dismiss();
      console.log(newImage);
      this.presentToast("Bukti transfer berhasil dikirim, mohon ditunggu sampai Admin memverifikasi pembayaran Anda.");
      this.ionViewWillEnter();
    });
  }
  
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
 
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
 
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
 
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
 
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    }); 
    toast.present();
  }

}
