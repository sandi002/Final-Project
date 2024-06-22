import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  qr = faQrcode;
  res;
  nama: any;
  saldo: any = 0;
  level: any = "normal member";
  encodedData: any = 0;

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    private router: Router,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    registerLocaleData( es );
  }

  async ionViewWillEnter(){
    const loadings = await this.loading.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.getdata().then(
      data => {
        loadings.dismiss();
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          this.encodedData = data['usrid'];
          this.updatedetail();
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
        loadings.dismiss();
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
  async getdata(){
    const token = await Preferences.get({ key: "data" });
    return token.value;
  }

  logout(){
    this.alert.konfirmasi("Logout","Yakin akan keluar dari akun Anda?").then((res)=>{
      //console.log(res);
      if(res.data == true){
        this.yesLogout();
      }
    });
  }
  async yesLogout(){
    const loading = await this.loading.create({message: "Tunggu sebentar..."});
    loading.present();
    this.auth.logout().subscribe(data=>{
      loading.dismiss();
      if(data['success']){
        this.router.navigate(['/login']);
      }
    });
  }
  async updatedetail(){
    const loading = await this.loading.create({message: "Tunggu sebentar..."});
    loading.present();
    this.auth.updateDetail().subscribe(data=>{
      loading.dismiss();
      this.nama = data['nama'];
      this.saldo = data['saldo'];
      if(data['level'] == 2){
        this.level = "reseller";
      }else if(data['level'] == 3){
        this.level = "agen";
      }else if(data['level'] == 4){
        this.level = "agen premium";
      }else if(data['level'] == 5){
        this.level = "distributor"
      }
    });
  }
  generateBarCode() {
    /*
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
        res => {
          alert(res);
          this.encodedData = res;
        }, error => {
          alert(error);
        }
    );
    */
}

}
