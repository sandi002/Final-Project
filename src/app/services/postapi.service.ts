import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';
import { from} from 'rxjs';
//import { Storage } from '@capacitor/storage';
import { Constants } from '../core/Constants';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  isLoggedIn = false;
  serverUP = false;
  token:any;
  dataResult = "error";
  API_URL = Constants.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  updateToken(postdata) {
    return this.http.post(this.API_URL + 'auth/updatetoken',postdata).pipe();
  }

  topupSaldo(postdata) {
    return this.http.post(this.API_URL + 'akun/topupsaldo',postdata).pipe();
  }
  tarikSaldo(postdata) {
    return this.http.post(this.API_URL + 'akun/tariksaldo',postdata).pipe();
  }
  batalTopup(postdata) {
    return this.http.post(this.API_URL + 'akun/bataltopup',postdata).pipe();
  }

  tambahKeranjang(postdata) {
    return this.http.post(this.API_URL + 'transaksi/tambahkeranjang',postdata).pipe();
  }
  updateKeranjang(postdata) {
    return this.http.post(this.API_URL + 'transaksi/updatekeranjang',postdata).pipe();
  }
  hapusKeranjang(postdata) {
    return this.http.post(this.API_URL + 'transaksi/hapuskeranjang',{"pid":postdata}).pipe();
  }
  cekVoucher(postdata) {
    return this.http.post(this.API_URL + 'transaksi/cekvoucher',postdata).pipe();
  }

  beliTopupPPOB(postdata) {
    return this.http.post(this.API_URL + 'ppob/prosestopup',postdata).pipe();
  }
  bayarTagihanPPOB(postdata) {
    return this.http.post(this.API_URL + 'ppob/prosestagihan',postdata).pipe();
  }
  bayarPPOB(postdata) {
    return this.http.post(this.API_URL + 'ppob/prosesbayar',postdata).pipe();
  }

  bayarPesananWA(postdata) {
    return this.http.post(this.API_URL + 'transaksi/cekout/?wa=true',postdata).pipe();
  }
  bayarPesanan(postdata) {
    return this.http.post(this.API_URL + 'transaksi/cekout',postdata).pipe();
  }
  bayarPesananWADigital(postdata) {
    return this.http.post(this.API_URL + 'transaksi/cekoutdigital/?wa=true',postdata).pipe();
  }
  bayarPesananDigital(postdata) {
    return this.http.post(this.API_URL + 'transaksi/cekoutdigital',postdata).pipe();
  }
  terimaPesanan(postdata) {
    return this.http.post(this.API_URL + 'transaksi/terimapesanan',{"id":postdata}).pipe();
  }
  hapusPesanan(postdata) {
    return this.http.post(this.API_URL + 'transaksi/hapuspesanan',{"pid":postdata}).pipe();
  }
  bayarTripay(postdata){
    return this.http.post(this.API_URL + 'transaksi/bayartripay',postdata).pipe();
  }


  simpanProfil(postdata) {
    return this.http.post(this.API_URL + 'akun/simpanprofil',  postdata).pipe();
  }
  simpanPass(postdata) {
    return this.http.post(this.API_URL + 'akun/simpanpassword',  postdata).pipe();
  }

  simpanReview(id,postdata) {
    return this.http.post(this.API_URL + 'review/tambahreview',{"id":id, "data": postdata}).pipe();
  }
  laporReview(postdata) {
    return this.http.post(this.API_URL + 'review/laporkanreview',postdata).pipe();
  }

  simpanAlamat(id,postdata) {
    return this.http.post(this.API_URL + 'akun/tambahalamat',{"id":id, "data": postdata}).pipe();
  }
  simpanAlamatUtama(id) {
    return this.http.post(this.API_URL + 'akun/tambahalamat/1',{"id":id}).pipe();
  }
  hapusAlamat(postdata) {
    return this.http.post(this.API_URL + 'akun/hapusalamat',{"pid":postdata}).pipe();
  }

  simpanRekening(id,postdata) {
    return this.http.post(this.API_URL + 'akun/tambahrekening',{"id":id, "data": postdata}).pipe();
  }
  hapusRekening(postdata) {
    return this.http.post(this.API_URL + 'akun/hapusrekening',{"pid":postdata}).pipe();
  }

  sendChat(postdata) {
    return this.http.post(this.API_URL + 'pesan/kirimpesan',postdata).pipe();
  }

}