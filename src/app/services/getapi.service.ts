import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';
import { from} from 'rxjs';
//import { Storage } from '@ionic/storage-angular';
import { Constants } from '../core/Constants';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  isLoggedIn = false;
  serverUP = false;
  token:any;
  dataResult = "error";
  APP_URL = Constants.webURL;
  API_URL = Constants.apiURL;

  constructor(
    private http: HttpClient,
    //private storage: Storage,
    private navCtrl: NavController,
    private alerts: AlertService
  ) { }

  apiUrl(){
    return this.API_URL;
  }

  cekOngkir(dari,berat,tujuan,kurir,services){
    return this.http.get(this.API_URL + 'ceksongkir?dari='+dari+'&berat='+berat+'&tujuan='+tujuan+'&kurir='+kurir+'&services='+services).pipe();
  }

  getLogin() {
    return this.http.get(this.API_URL + 'auth/loginmode').pipe();
  }
  
  getSaldo() {
    return this.http.get(this.API_URL + 'akun/saldo').pipe();
  }
  getBayarSaldo(id) {
    return this.http.get(this.API_URL + 'akun/bayarsaldo/'+id).pipe();
  }

  getSlider() {
    return this.http.get(this.API_URL + 'home/slider').pipe();
  }
  getPromo() {
    return this.http.get(this.API_URL + 'home/promo').pipe();
  }

  getBlog() {
    return this.http.get(this.API_URL + 'home/blog').pipe();
  }
  getBlogSingle(id) {
    return this.http.get(this.API_URL + 'home/blogsingle/'+id).pipe();
  }

  dropBank() {
    return this.http.get(this.API_URL + 'home/getbank').pipe();
  }

  wasapRotator() {
    return this.http.get(this.API_URL + 'home/getwhatsapp').pipe();
  }

  dropProv() {
    return this.http.get(this.API_URL + 'home/getprov').pipe();
  }
  dropKab(prov) {
    return this.http.get(this.API_URL + 'home/getkab/'+prov).pipe();
  }
  dropKec(kab) {
    return this.http.get(this.API_URL + 'home/getkec/'+kab).pipe();
  }

  getTestimoni() {
    return this.http.get(this.API_URL + 'home/testimoni').pipe();
  }

  getProduk() {
    return this.http.get(this.API_URL + 'produk/produkterbaru').pipe();
  }
  getProdukDigital() {
    return this.http.get(this.API_URL + 'produk/produkdigital').pipe();
  }
  getProdukPO() {
    return this.http.get(this.API_URL + 'produk/produkpreorder').pipe();
  }
  cariProduk(id,page) {
    return this.http.post(this.API_URL + 'produk/cariproduk'+ '?page=' + page,{"cari":id}).pipe();
  }
  getProdukKategori(id,page) {
    return this.http.get(this.API_URL + 'produk/produk?catid=' + id + '&page=' + page).pipe();
  }

  //PPOB
  getProdukPPOB(kategori,brand) {
    return this.http.post(this.API_URL + 'ppob/produk',{"kategori":kategori,"brand":brand}).pipe();
  }
  getBrandPPOB(kategori) {
    return this.http.post(this.API_URL + 'ppob/produkbrand',{"kategori":kategori}).pipe();
  }
  getTagihanPPOB(kode,nomer) {
    return this.http.post(this.API_URL + 'ppob/tagihan',{"kode":kode,"nomer":nomer}).pipe();
  }
  getTransaksiPPOB(invoice) {
    return this.http.post(this.API_URL + 'ppob/transaksi',{"trx":invoice}).pipe();
  }
  PPOBLoad(page,perpage=10){
    return this.http.get(this.API_URL + 'ppob/transaksilist?page=' + page + '&perpage=' + perpage).pipe();
  }

  getNotif() {
    return this.http.get(this.API_URL + 'home/notif').pipe();
  }
  getChat() {
    return this.http.get(this.API_URL + 'pesan/chat').pipe();
  }

  getVoucher(digital) {
    return this.http.get(this.API_URL + 'transaksi/getvoucher?digital='+digital).pipe();
  }
  getBayar() {
    return this.http.get(this.API_URL + 'transaksi/bayarpesanan').pipe();
  }
  getBayarDigital() {
    return this.http.get(this.API_URL + 'transaksi/bayarpesanandigital').pipe();
  }
  getBayarDetail(id) {
    return this.http.get(this.API_URL + 'transaksi/pembayaran/'+id).pipe();
  }

  getReview(id) {
    return this.http.get(this.API_URL + 'review/getreview/'+id).pipe();
  }

  getKategori() {
    return this.http.get(this.API_URL + 'home/kategori').pipe();
  }

  getKeranjang() {
    return this.http.get(this.API_URL + 'transaksi/keranjang').pipe();
  }

  alamatLoad(id){
    return this.http.get(this.API_URL + 'akun/alamat/?page=' + id).pipe();
  }
  alamatSingle(gudang,id,berat){
    return this.http.get(this.API_URL + 'akun/getalamat/' + gudang + '/' + id + '/' + berat).pipe();
  }

  rekeningLoad(id,perpage=6){
    return this.http.get(this.API_URL + 'akun/rekening/?page=' + id+ '&perpage=' + perpage).pipe();
  }
  rekeningSingle(id){
    return this.http.get(this.API_URL + 'akun/getrekening/' + id).pipe();
  }

  lacakPaket(id){
    return this.http.get(this.API_URL + 'home/lacakiriman/?trx=' + id).pipe();
  }

  profilLoad(){
    return this.http.get(this.API_URL + 'akun/profil');
  }

  pesananLoad(id,status){
    return this.http.get(this.API_URL + 'transaksi/pesanan/?page=' + id + '&status=' + status).pipe();
  }
  pesananSingle(id){
    return this.http.get(this.API_URL + 'transaksi/pesanansingle/' + id).pipe();
  }

  getProdukSingle(id) {
    return this.http.get(this.API_URL + 'produk/produksingle?pid=' + id).pipe();
  }
  getSize(id,proid) {
    return this.http.get(this.API_URL + 'produk/size?pid=' + id + '&proid=' + proid).pipe();
  }
}