import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { EventsService } from 'src/app/services/events.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-tambahkeranjang',
  templateUrl: './tambahkeranjang.page.html',
  styleUrls: ['./tambahkeranjang.page.scss'],
})
export class TambahkeranjangPage implements OnInit {
	public inputForm: FormGroup;
  public submitAttempt: boolean = false;
  minus = faMinus;
  plus = faPlus;
  idproduk: any;
  title: any;
  sliders: any;
  stoknya: any;
  harga: any;
  hargacoret: any;
  warnas: any = [];
  variasea: any;
  deskripsi: any;
  ulasan: any;
  totulasan: any;
  nilai: any;
  sizes: any = [];
  variasi: any;
  subvariasi: any;

  constructor(
    private getapi: GetapiService,
    private modalController: ModalController,
    private loading: LoadingController,
    private alert: AlertService,
    private postapi: PostapiService,
    public formBuilder: FormBuilder,
    private navParams: NavParams,
    private events: EventsService
    ) {
      this.inputForm = formBuilder.group({
        idproduk: [this.idproduk,Validators.compose([Validators.required])],
        warna: ["0",Validators.compose([Validators.required])],
        size: ["0",Validators.compose([Validators.required])],
        variasi: ["0",Validators.compose([Validators.required])],
        jumlah: [1,Validators.compose([Validators.required])],
        keterangan: [""],
      });
    }

  ngOnInit() {
    console.table(this.navParams);
    this.idproduk = this.navParams.data.id;
  }
  async ionViewWillEnter(){ 
    this.getData();
  }

  async getData(){
    this.getapi.getProdukSingle(this.idproduk).subscribe(data=>{
      this.title = data['nama'];
      this.sliders = data['foto'];
      this.stoknya = data['stok'];
      this.harga = data['harga'];
      this.hargacoret = data['hargacoret'];
      this.warnas = data['warna'];
      this.variasea = data['variasiproduk'];
      this.variasi = data['variasi'];
      this.subvariasi = data['subvariasi'];
      this.deskripsi = data['deskripsi'];
      this.ulasan = data['ulasan'];
      this.totulasan = data['totulasan'];
      this.nilai = data['nilai'];
      console.log(data);
    });
    this.inputForm.controls['idproduk'].setValue(this.id);
  }
  id(id: any) {
    throw new Error('Method not implemented.');
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
          //this.router.navigate(['/tabs/tab2']);
          this.closeModal();
          this.events.publishData("keranjang");
        }else{
          this.alert.presentAlert("Pesanan tidak dapat diproses",data['msg']);
        }
      });
    }else{
      loadings.dismiss();
      this.inputForm.touched;
      this.alert.presentToast("Lengkapi formatnya terlebih dahulu");
      console.log(this.inputForm.value);
    }
  }

  tambah(){
    var jumlah = parseFloat(this.inputForm.value.jumlah) + 1;
    this.inputForm.controls['jumlah'].setValue(jumlah);
  }
  kurang(){
    var jumlah = parseFloat(this.inputForm.value.jumlah) - 1;
    if(jumlah <= 0){
      jumlah = 1;
    }
    this.inputForm.controls['jumlah'].setValue(jumlah);
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
        if(data['subvar'] > 0){
          this.sizes = data['size'];
        }else{
          this.inputForm.controls['variasi'].setValue(data['varid']);
        }
      }else{
        this.alert.presentToast("Gagal mengambil data sub varian produk");
      }
    });
  }
  setVariasi(){
    var variasi = this.inputForm.controls['size'].value;
    //this.alert.konfirmasi("bener iki?",variasi);
    this.inputForm.controls['variasi'].setValue(variasi);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
