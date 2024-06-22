import { Component, OnInit, PipeTransform, Pipe, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetapiService } from 'src/app/services/getapi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { PostapiService } from 'src/app/services/postapi.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { TambahkeranjangPage } from '../../modals/tambahkeranjang/tambahkeranjang.page';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-produks',
  templateUrl: './produks.page.html',
  styleUrls: ['./produks.page.scss'],
})
export class ProduksPage implements OnInit{
	public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  title;
  id: any;
  slideOpts= {
    autoplay: true,
    pager: true,
    slidesPerview: 1,
    spaceBetween: 0
  };
  login = false;
  sliders: any= [];
  harga: any;
  hargacoret: any;
  warna: any;
  deskripsi: any;
  size: any;
  stok: any;
  stoknya = 0;
  maxStok = 0;
  variasi: any;
  sizes: any;
  warnas: any;
  variasea: any = 0;
  ulasan: any = [];
  totulasan: any= 0;
  nilai: any = 0;
  minorder: any;
  berat: any;
  kategori: any;
  po: any;
  pohari: any;
  digital: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private alert: AlertService,
    private storage: StorageService,
    private router: Router,
    private postapi: PostapiService,
    private loading: LoadingController,
    public formBuilder: FormBuilder,
    private socialSharing: SocialSharing,
    private domSanitizer: DomSanitizer,
    public actionSheetCtrl: ActionSheetController,
    public modalController: ModalController
    ) {
      this.inputForm = formBuilder.group({
        idproduk: [this.id,Validators.compose([Validators.required])],
        warna: ["0",Validators.compose([Validators.required])],
        variasi: ["0",Validators.compose([Validators.required])],
        jumlah: [1,Validators.compose([Validators.required])],
        keterangan: [""],
      });
    }

  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.updateSlides();
  }
  
  wasap(){
    this.getapi.wasapRotator().subscribe(res =>{
      this.socialSharing.shareViaWhatsAppToReceiver(
        res["wasap"],
        "Halo, saya mau order produk *"+this.title+"* apakah masih tersedia?",
        null,
        null
      );
    });    
  }

  async getData(){
    const loadings = await this.loading.create({
      message: 'Memuat Produk...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getapi.getProdukSingle(this.id).subscribe(data=>{
      this.title = data['nama'];
      this.sliders = data['foto'];
      this.stoknya = data['stok'];
      this.berat = data['berat'];
      this.kategori = data['kategori'];
      this.minorder = data['minorder'];
      this.harga = data['harga'];
      this.hargacoret = data['hargacoret'];
      this.warnas = data['warna'];
      this.variasea = data['variasiproduk'];
      this.deskripsi = data['deskripsi'];
      this.ulasan = data['ulasan'];
      this.totulasan = data['totulasan'];
      this.nilai = data['nilai'];
      this.po = data['po'];
      this.pohari = data['pohari'];
      this.digital = data['digital'];
      loadings.dismiss();
    });
    this.inputForm.controls['idproduk'].setValue(this.id);
  }
  updateSlides(){
    console.log("fired");
    setTimeout(res=>{
      /*console.log(this.slides.length());
      this.slides.update().then(re=>{
        console.log("ion slide updated");
      });
      */
    },1000);
  }

  async ionViewWillEnter(){ 
    this.getData();   
    this.storage.getData('data').then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.login = true;
        } else {
          //this.router.navigate(['/login']);
          this.login = false;
        }
      },
      error => {
        //this.router.navigate(['/login']);
        this.login = false;
      }
    );

  }

  async tanyaAdmin(){
    const loadings = await this.loading.create({
      message: 'Mengirim pesan...',
      spinner: 'crescent'
    });
    await loadings.present();
    this.postapi.sendChat({"pesan":"","produk":this.id}).subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.router.navigate(["/chat"]);
      }else{
        this.alert.presentAlert("Server Penuh","gagal mengirim pesan");
      }
    });
  }

  async lapor(id) {
    const buttons = [
      {
        text: 'Spam atau phising',
        handler: () => {
          this.laporkanReview(id,1);
        }
      },
      {
        text: 'Mengandung pornografi',
        handler: () => {
          this.laporkanReview(id,2);
        }
      },
      {
        text: 'Pelecehan atau ancaman',
        handler: () => {
          this.laporkanReview(id,3);
        }
      },
      {
        text: 'Bahaya atau exploitasi anak',
        handler: () => {
          this.laporkanReview(id,4);
        }
      },
      {
        text: 'Perkataan yang tidak pantas',
        handler: () => {
          this.laporkanReview(id,5);
        }
      },
      {
        text: 'Pelanggaran lain',
        handler: () => {
          this.laporkanReview(id,6);
        }
      }
    ];
 
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Laporkan Penyalahgunaan',
      buttons
    });
    await actionSheet.present();
  }
  async laporkanReview(id,tentang){
    const loadings = await this.loading.create({
      message: 'Mengirim laporan...',
      spinner: 'crescent'
    });
    await loadings.present();
    this.postapi.laporReview({"tentang":tentang,"id":id}).subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.alert.presentAlert("Laporan Terkirim","Terimakasih, laporan Anda berhasil dikirim dan Kami akan segera menindaklanjuti laporan Anda. Apabila memang ada indikasi pelanggaran, akan segera Kami hapus data tersebut.");
      }else{
        this.alert.presentAlert("Server Penuh","gagal mengirim pesan");
      }
    });
  }

  cekStok(stoks){
    this.stok = stoks;
    console.log("stok: "+stoks);
  }

  async beliproduk(){
    const loadings = await this.loading.create({
      message: 'Memproses pesanan...',
      spinner: 'crescent'
    });
    await loadings.present();

    if(this.inputForm.valid){
      this.postapi.tambahKeranjang(this.inputForm.value).subscribe(data=>{
        loadings.dismiss();
        if(data['success'] == true){
          this.alert.presentToast("Produk berhasil ditambahkan ke keranjang belanja");
          this.router.navigate(['/tabs/tab2']);
        }else{
          this.alert.presentAlert("Pesanan tidak dapat diproses","Cek kembali informasi produk Anda, pastikan jumlah tidak lebih dari stok yang tersedia");
        }
      });
    }else{
      loadings.dismiss();
      this.inputForm.touched;
      this.alert.presentToast("Lengkapi formatnya terlebih dahulu");
      console.log(this.inputForm.value);
    }
  }

  async getSize(){
    const loadings = await this.loading.create({
      message: 'Memuat sub varian...',
      spinner: 'crescent'
    });
    await loadings.present();

    const val = this.inputForm.value;
    this.getapi.getSize(val.warna,this.id).subscribe(data=>{
      loadings.dismiss();
      if(data['success'] == true){
        this.sizes = data['size'];
      }else{
        this.alert.presentToast("Gagal mengambil data sub varian produk");
      }
    });
  }
  
  tambahKeranjang() {
    this.storage.getData('data').then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.addKrj(this.id);
        } else {
          this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(data=>{
            if(data['data'] == true){
              this.router.navigate(['/login']);
            }else{
              this.router.navigate(['/']);
            }
          });
        }
      },
      error => {
        this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(data=>{
          if(data['data'] == true){
            this.router.navigate(['/login']);
          }else{
            this.router.navigate(['/']);
          }
        });
      }
    );
  }

  async addKrj(id){
    const modal = await this.modalController.create({
      component: TambahkeranjangPage,
      cssClass: 'tambahkeranjang',
      componentProps: {
        "id": id,
      }
    });
    return await modal.present();
  }

}
