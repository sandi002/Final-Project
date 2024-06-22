import { Component, OnInit } from '@angular/core';
import { faShippingFast,faBox,faBoxes } from '@fortawesome/free-solid-svg-icons';
import { GetapiService } from 'src/app/services/getapi.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-detailpesanan',
  templateUrl: './detailpesanan.page.html',
  styleUrls: ['./detailpesanan.page.scss'],
})
export class DetailpesananPage implements OnInit {
  shipping = faShippingFast;
  box = faBox;
  boxes = faBoxes;
  produk:any = [];
  id: string;
  alamat: any;
  harga: any;
  ongkir: any;
  total: any;
  status: any = 0;
  paket: any;
  kurir: any;
  kadaluarsa: any;
  cod: any = "0";
  digital: any;
  warna: any = "primary";

  constructor(
    private getapi: GetapiService,
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private navCtrl: NavController,
    private loding: LoadingController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(0,() => {
        this.navCtrl.navigateBack("/tabs/tab3");
    });
    this.openDetail();
  }

  async openDetail(){
    const lod = await this.loding.create({
      message: "loading...",
      spinner: "crescent"
    });
    lod.present();
    
    this.getapi.pesananSingle(this.id).subscribe(res=>{
      lod.dismiss();
      this.produk = res['produk'];
      this.digital = res['data']['digital'];
      this.harga = res['data']['harga'];
      if(this.digital == 0){
        this.cod = res['data']['cod'];
        this.alamat = res['data']['alamat'];
        this.ongkir = res['data']['ongkir'];
        this.paket = res['data']['paket'];
        this.kurir = res['data']['kurir'];
      }
      this.total = res['data']['total'];
      this.status = res['data']['status'];
      this.kadaluarsa = res['data']['kadaluarsa'];
      if(this.status == 0){
        this.warna = "warning";
      }else if(this.status == 1 || this.status == 2){
        this.warna = "primary";
      }else if(this.status == 3){
        this.warna = "success";
      }else if(this.status == 4){
        this.warna = "danger";
      }else{
        this.warna = "primary";
      }
    });
  }

}
