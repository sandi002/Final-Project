import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { faUser,faUnlock } from '@fortawesome/free-solid-svg-icons';
import { GetapiService } from 'src/app/services/getapi.service';
import { Constants } from 'src/app/core/Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = faUser;
  unlock = faUnlock;
  mode = 1;
  otp;
  otpid = 0;
  kodeotp = "";
  weburl = Constants.webURL;
  
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public loadingCtrl: LoadingController,
    private getapi: GetapiService
  ) { }
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getapi.getLogin().subscribe(res=>{
      if(res['success'] == true){
        this.mode = res['mode'];
      }
    });
  }
  
  async login(form: NgForm) {
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    
    if(this.mode == 2){
      this.authService.login(form.value.email, form.value.password).subscribe(
        data => {
          loading.dismiss();
          if(data['success'] == true){
              this.alertService.presentToast("Selamat datang kembali "+data['nama']);
              this.navCtrl.navigateRoot('/');
          }else{
            this.alertService.presentAlert("gagal masuk",data["message"]);
          }
        },
        error => {
          loading.dismiss();
          console.log(error);
          this.alertService.presentToast(error);
        }
      );
    }else{
      this.authService.loginOTP(form.value.email).subscribe(
        data => {
          loading.dismiss();
          if(data['success'] == true){
              this.otp = true;
              this.otpid = data['otpid'];
          }else{
            this.alertService.presentAlert("gagal masuk","silahkan cek kembali nomor whatsapp atau email Anda");
          }
        },
        error => {
          loading.dismiss();
          console.log(error);
          this.alertService.presentToast(error);
        }
      );
    }
  }
  async resend() {
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    this.authService.loginOTPResend(this.otpid).subscribe(
      data => {
        loading.dismiss();
        if(data['success'] == true){
          this.alertService.presentToast("Kode OTP berhasil dikirim, silahkan cek kembali");
          this.otpid = data['otpid'];
        }else{
          this.alertService.presentAlert("Kode OTP Salah","silahkan cek kembali kode OTP terbaru yang sudah kami kirim ke whatsapp atau email Anda");
        }
      },
      error => {
        loading.dismiss();
        console.log(error);
        this.alertService.presentToast(error);
      }
    );
  }
  
  async lanjut() {
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    this.authService.postOTP(this.kodeotp,this.otpid).subscribe(
      data => {
        loading.dismiss();
        if(data['success'] == true){
          this.alertService.presentToast("Selamat datang kembali "+data['nama']);
          this.navCtrl.navigateRoot('/');
        }else{
          this.alertService.presentAlert("Kode OTP Salah","silahkan cek kembali kode OTP terbaru yang sudah kami kirim ke whatsapp atau email Anda");
        }
      },
      error => {
        loading.dismiss();
        console.log(error);
        this.alertService.presentToast(error);
      }
    );
  }
}
