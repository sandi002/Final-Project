import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { faEnvelope, faPhone, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { GetapiService } from 'src/app/services/getapi.service';
import { Constants } from 'src/app/core/Constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = faUser;
  email = faEnvelope;
  hp = faPhone;
  unlock = faUnlock;
  mode = 1;
  otp;
  otpid = 0;
  kodeotp = "";
  weburl = Constants.webURL;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private getapi: GetapiService,
    private alertService: AlertService
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

  async register(form: NgForm) {
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    
    if(this.mode == 2){
      this.authService.register(form.value.nama, form.value.email, form.value.password, form.value.nohp).subscribe(
        data => {
          loading.dismiss();
          if(data["success"] == true){
            this.alertService.presentToast("berhasil mendaftar, kami telah mengirimkan link verifikasi ke email dan silahkan verifikasi akun Anda terlebih dahulu");
            this.navCtrl.navigateRoot('/login');
          }else{
            this.alertService.presentToast(data['message']);
          }
        },
        error => {
          loading.dismiss();
          console.log(error);
          this.alertService.presentToast(error);
        },
        () => {
          
        }
      );
    }else{
      this.authService.registerOTP(form.value.email).subscribe(
        data => {
          loading.dismiss();
          if(data['success'] == true){
              this.otp = true;
              this.otpid = data['otpid'];
          }else{
            this.alertService.presentAlert("gagal mendaftar","silahkan cek kembali nomor whatsapp atau email Anda mungkin sudah terdaftar");
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
  
  async lanjut() {
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    this.authService.postregisterOTP(this.kodeotp,this.otpid).subscribe(
      data => {
        loading.dismiss();
        if(data['success'] == true){
          this.alertService.presentToast("Selamat datang "+data['nama']);
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

  async resend(){
    const loading = await this.loadingCtrl.create({message: "Tunggu sebentar..."});
    await loading.present();
    this.authService.registerOTPResend(this.otpid).subscribe(
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
}
