import { Component } from '@angular/core';
//import { faHome,faShoppingBasket,faBox,faUserCircle, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { ModalController, NavController} from '@ionic/angular';
import { ModalchatPage } from '../pages/modalchat/modalchat.page';
import { EventsService } from '../services/events.service';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  /*home = faHome;
  shop = faShoppingBasket;
  box = faBox;
  user = faUserCircle;
  qr = faQrcode;*/
  cariText: any = "";
  keranjang: any = 0;

  constructor(
    public navCtrl: NavController,
    private getapi: GetapiService,
    private events: EventsService,
    private modalController: ModalController
  ){

  }

  ionViewWillEnter(){
    this.keranjangs();

    this.events.getObservable().subscribe((data) => {
      //console.log("Data received:", data);
      if(data == "keranjang"){
        this.keranjangs();
      }
    });
  }
  ionTabsDidChange(){
    this.keranjangs();
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalchatPage,
      cssClass: 'auto-height'
    });
    return await modal.present();
  }

  keranjangs(){
    this.getapi.getNotif().subscribe(data=>{
      if(data['success'] == true){
        this.keranjang = data['keranjang'];
      }else{
        this.keranjang = 0;
      }
    });
  }
  /*
  scan(){
    this.options = {
      prompt : "Scan kode QR / barcode produk"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.cariText = barcodeData;
      localStorage.setItem("search",this.cariText['text']);
      this.navCtrl.navigateForward('cariproduk');
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }
  */

}
