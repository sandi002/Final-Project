"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7490],{3141:(l,n,i)=>{i.r(n),i.d(n,{ModalchatPageModule:()=>t});var o=i(6814),p=i(95),u=i(1325),g=i(8371),P=i(8567),a=i(6689);const r=[{path:"",component:P.z}];let L=(()=>{class e{static \u0275fac=function(h){return new(h||e)};static \u0275mod=a.oAB({type:e});static \u0275inj=a.cJS({imports:[g.Bz.forChild(r),g.Bz]})}return e})(),t=(()=>{class e{static \u0275fac=function(h){return new(h||e)};static \u0275mod=a.oAB({type:e});static \u0275inj=a.cJS({imports:[o.ez,p.u5,u.Pc,L]})}return e})()},492:(l,n,i)=>{i.d(n,{L:()=>a});var o=i(3082),p=i(6689),u=i(9862),g=i(1325),P=i(3251);let a=(()=>{class r{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=o.g.webURL;API_URL=o.g.apiURL;constructor(t,e,s){this.http=t,this.navCtrl=e,this.alerts=s}apiUrl(){return this.API_URL}cekOngkir(t,e,s,d,h){return this.http.get(this.API_URL+"ceksongkir?dari="+t+"&berat="+e+"&tujuan="+s+"&kurir="+d+"&services="+h).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(t){return this.http.get(this.API_URL+"akun/bayarsaldo/"+t).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(t){return this.http.get(this.API_URL+"home/blogsingle/"+t).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(t){return this.http.get(this.API_URL+"home/getkab/"+t).pipe()}dropKec(t){return this.http.get(this.API_URL+"home/getkec/"+t).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(t,e){return this.http.post(this.API_URL+"produk/cariproduk?page="+e,{cari:t}).pipe()}getProdukKategori(t,e){return this.http.get(this.API_URL+"produk/produk?catid="+t+"&page="+e).pipe()}getProdukPPOB(t,e){return this.http.post(this.API_URL+"ppob/produk",{kategori:t,brand:e}).pipe()}getBrandPPOB(t){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:t}).pipe()}getTagihanPPOB(t,e){return this.http.post(this.API_URL+"ppob/tagihan",{kode:t,nomer:e}).pipe()}getTransaksiPPOB(t){return this.http.post(this.API_URL+"ppob/transaksi",{trx:t}).pipe()}PPOBLoad(t,e=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+t+"&perpage="+e).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(t){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+t).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(t){return this.http.get(this.API_URL+"transaksi/pembayaran/"+t).pipe()}getReview(t){return this.http.get(this.API_URL+"review/getreview/"+t).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(t){return this.http.get(this.API_URL+"akun/alamat/?page="+t).pipe()}alamatSingle(t,e,s){return this.http.get(this.API_URL+"akun/getalamat/"+t+"/"+e+"/"+s).pipe()}rekeningLoad(t,e=6){return this.http.get(this.API_URL+"akun/rekening/?page="+t+"&perpage="+e).pipe()}rekeningSingle(t){return this.http.get(this.API_URL+"akun/getrekening/"+t).pipe()}lacakPaket(t){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+t).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(t,e){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+t+"&status="+e).pipe()}pesananSingle(t){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+t).pipe()}getProdukSingle(t){return this.http.get(this.API_URL+"produk/produksingle?pid="+t).pipe()}getSize(t,e){return this.http.get(this.API_URL+"produk/size?pid="+t+"&proid="+e).pipe()}static \u0275fac=function(e){return new(e||r)(p.LFG(u.eN),p.LFG(g.SH),p.LFG(P.c))};static \u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);