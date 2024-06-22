import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { LoadingController, Platform, NavController, ActionSheetController, ToastController } from '@ionic/angular';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-bayarsaldo',
  templateUrl: './bayarsaldo.page.html',
  styleUrls: ['./bayarsaldo.page.scss'],
})
export class BayarsaldoPage implements OnInit {
  id: string;
  total: any;
  rekening: any = [];
  kadaluarsa: any;
  status: any = 0;
  bukti: any = "";
  imageURI:any;
  imageFileName:any;
  GetImageNameUpload:any;

  constructor(
    private getapi: GetapiService,
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
        this.navCtrl.navigateBack("/saldo");
    });
  }

  async ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let loading = await this.loadingCtrl.create({
      message: 'tunggu sebentar',
      spinner: 'circular'
    });
    await loading.present();

    this.getapi.getBayarSaldo(this.id).subscribe(res=>{
      loading.dismiss();
      if(res['success'] == true){
        this.bukti = res['bukti'];
        this.status = res['status'];
        this.total = res['total'];
        this.kadaluarsa = res['kadaluarsa'];
        this.rekening = res['rekening'];
      }
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Pilih sumber gambar',
      cssClass: 'action',
      buttons: [
        {
          text: 'Ambil foto',
          icon: 'camera',
          handler: () => {
            this.addImage(CameraSource.Camera);
          }
        },
        {
          text: 'Ambil dari galeri',
          icon: 'images',
          handler: () => {
            this.addImage(CameraSource.Photos);
          }
        },        
        {
          icon: 'close-circle',
          text: 'Batal',
          role: 'cancel'
        }
      ]
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
 
    this.api.uploadKonfirmasiTopup(blobData, this.id, image.format).subscribe(newImage => {
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
