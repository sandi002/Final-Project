import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { Constants } from '../core/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  serverUP = false;
  token:any;
  dataResult = "error";
  API_URL = Constants.apiURL;
  tokenSet: boolean;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private alerts: AlertService
  ) {
    this.getToken();
    this.cekLogin();
  }

  lupa(email: String) {
    return this.http.post(this.API_URL + 'auth/lupa',
      {email: email}
    ).pipe(
      tap(token => {
        return token;
      }),
    );
  }

  async removeData(dataKey){
    await Preferences.remove({ key: dataKey });
  }
  async setData(dataKey,dataValue){
    await Preferences.set({ key: dataKey, value: dataValue });
  }
  async getData(dataKey){
    const token = await Preferences.get({ key: dataKey });
    return token.value;
  }
  login(email: String, password: String) {
    return this.http.post(this.API_URL + 'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        if(token['success'] == true && token['mode'] != 1){
          this.removeData("token");
          this.removeData("data");
          this.setData("token",token['token']);
          this.setData("data",JSON.stringify(token));
          this.token = token;
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
        return token;
      }),
    );
  }
  postOTP(email: String,otpid) {
    return this.http.post(this.API_URL + 'auth/loginotp',
      {otp: email,otpid:otpid,tipe: "confirm"}
    ).pipe(
      tap(token => {
        if(token['success'] == true && token['mode'] != 1){
          this.removeData("token");
          this.removeData("data");
          this.setData("token",token['token']);
          this.setData("data",JSON.stringify(token));
          this.token = token;
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
        return token;
      }),
    );
  }

  loginOTP(email: String) {
    return this.http.post(this.API_URL + 'auth/loginotp',
      {email: email,tipe: "none"}
    ).pipe();
  }
  loginOTPResend(otpid) {
    return this.http.post(this.API_URL + 'auth/loginotp',
      {otpid: otpid,tipe: "resend"}
    ).pipe();
  }

  updateDetail() {
    return this.http.get(this.API_URL + 'akun/userdetail').pipe(
      tap(token => {
        this.removeData("data");
        this.setData("data",JSON.stringify(token));
      }),
    );
  }

  register(nama: String, email: String, password: String, nohp: String) {
    return this.http.post(this.API_URL + 'auth/register',
      {'nama': nama, 'email': email, 'password': password, 'nohp': nohp}
    )
  }
  postregisterOTP(email: String,otpid) {
    return this.http.post(this.API_URL + 'auth/registerotp',
      {otp: email,otpid:otpid,tipe: "confirm"}
    ).pipe(
      tap(token => {
        if(token['success'] == true && token['mode'] != 1){
          this.removeData("token");
          this.removeData("data");
          this.setData("token",token['token']);
          this.setData("data",JSON.stringify(token));
          this.token = token;
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
        return token;
      }),
    );
  }
  registerOTP(email: String) {
    return this.http.post(this.API_URL + 'auth/registerotp',
      {email: email,tipe: "none"}
    ).pipe();
  }
  registerOTPResend(otpid) {
    return this.http.post(this.API_URL + 'auth/registerotp',
      {otpid: otpid,tipe: "resend"}
    ).pipe();
  }

  logout() {
    return this.http.get(this.API_URL + 'auth/logout')
    .pipe(
      tap(data => {
        if(data['success'] == true){
          this.removeData("token");
          this.removeData("data");
          this.isLoggedIn = false;
          delete this.token;
          this.alerts.presentToast("Anda sudah keluar, untuk mengakses informasi produk dan pesanan silahkan login kembali");
          return data;
        }else{
          this.alerts.presentToast("Gagal logout! ulangi beberapa saat lagi");
        }
      })
    )
  }

  user() {
    return this.http.get(this.API_URL + 'auth/user')
    .pipe(
      tap(
        user => {
          if(user){
            return user;
          }else{
            this.removeData("token");
            this.navCtrl.navigateRoot('/');
          }
        }
      )
    )
  }

  getToken() {
    return this.getData("token").then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.tokenSet=true;
        } else {
          this.tokenSet=false;
          this.cekToken();
        }
      },
      error => {
        this.token = null;
        this.tokenSet=false;
        this.cekToken();
      }
    );
  }
  cekLogin(){
    return this.getData('data').then(
      data => {
        if(data != null) {
          data = JSON.parse(data);
          if(data['usrid'] != 0) {
            this.isLoggedIn=true;
          } else {
            this.isLoggedIn=false;
          }
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.isLoggedIn=false;
      }
    );
  }

  cekToken() {
    console.log("getting token from server...");
    return this.http.get(this.API_URL + 'auth/getsessiontoken');
    /*.subscribe(token => {
        if(token['success'] == true){
          console.log("getting token from server: success");
          this.storage.set('token', token['token']);
          this.storage.set('data', token);
          this.token = token;
          this.tokenSet = true;
        }else{
          console.log("getting token from server: failed");
          this.tokenSet = false;
        }
        return token;
      }
    )*/
  }
}