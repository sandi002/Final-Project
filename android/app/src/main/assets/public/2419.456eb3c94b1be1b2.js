"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2419],{2419:(U,d,s)=>{s.d(d,{B:()=>v});var r=s(5861),h=s(6828),u=s(6814),t=s(6689),m=s(492),_=s(6465),o=s(1325),P=s(3251),e=s(95);function a(g,A){if(1&g&&(t.TgZ(0,"b"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&g){const i=t.oxw().$implicit;t.xp6(1),t.hij("",t.Dn7(2,1,i.potongan,"","es"),"%")}}function c(g,A){if(1&g&&(t.TgZ(0,"b"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&g){const i=t.oxw().$implicit;t.xp6(1),t.hij("Rp ",t.Dn7(2,1,i.potongan,"","es"),"")}}function L(g,A){if(1&g){const i=t.EpF();t.TgZ(0,"div",12),t.NdJ("click",function(){const l=t.CHM(i).$implicit,k=t.oxw();return t.KtG(k.cekode(l.kode))}),t.TgZ(1,"div",13),t._uU(2),t.qZA(),t.TgZ(3,"div",14),t._uU(4,"diskon sampai "),t.YNc(5,a,3,5,"b",15),t.YNc(6,c,3,5,"b",15),t.qZA(),t.TgZ(7,"div",16),t._uU(8),t.ALo(9,"number"),t.qZA()()}if(2&g){const i=A.$implicit;t.xp6(2),t.Oqu(i.nama),t.xp6(3),t.Q6J("ngIf",1==i.tipe),t.xp6(1),t.Q6J("ngIf",2==i.tipe),t.xp6(2),t.hij("minimal transaksi Rp ",t.Dn7(9,4,i.potonganmin,"","es"),"")}}function I(g,A){1&g&&(t.TgZ(0,"div",17),t._uU(1," saat ini belum ada penawaran promo yg tersedia, ikuti terus perkembangannya jangan lewatkan penawaran terbaik dari kami nanti. "),t.qZA())}let v=(()=>{class g{getapi;postapi;modalController;loading;alert;item=[];kode="";digital=0;ongkir=0;harga=0;constructor(i,n,p,l,k){this.getapi=i,this.postapi=n,this.modalController=p,this.loading=l,this.alert=k}ngOnInit(){(0,u.qS)(h.Z)}ionViewWillEnter(){this.getVoucher()}getVoucher(){var i=this;return(0,r.Z)(function*(){const n=yield i.loading.create({message:"Memuat penawaran promo...",spinner:"circular"});yield n.present(),i.getapi.getVoucher(i.digital).subscribe(p=>{n.dismiss(),1==p.success&&(i.item=p.result)})})()}cekVoucher(){var i=this;return(0,r.Z)(function*(){const n=yield i.loading.create({message:"Tunggu sebentar...",spinner:"circular"});yield n.present(),i.postapi.cekVoucher({kode:i.kode,digital:i.digital,harga:i.harga,ongkir:i.ongkir}).subscribe(p=>{n.dismiss(),1==p.success?(i.alert.presentToast("Voucher telah berhasil dipasang, silahkan menikmati diskon dari pembelian Anda."),localStorage.setItem("voucher",i.kode),i.closeModal()):(localStorage.removeItem("voucher"),i.alert.presentAlert("Voucher Tidak Berlaku","Kode voucher salah atau penggunaan voucher telah melebihi batas maksimum sehingga sudah tidak berlaku lagi"))})})()}cekode(i){var n=this;return(0,r.Z)(function*(){const p=yield n.loading.create({message:"Tunggu sebentar...",spinner:"circular"});yield p.present(),n.postapi.cekVoucher({kode:i,digital:n.digital,harga:n.harga,ongkir:n.ongkir}).subscribe(l=>{p.dismiss(),1==l.success?(n.alert.presentToast("Voucher telah berhasil dipasang, silahkan menikmati diskon dari pembelian Anda."),localStorage.setItem("voucher",i),n.closeModal()):(localStorage.removeItem("voucher"),n.alert.presentAlert("Voucher Tidak Berlaku","Kode voucher salah atau penggunaan voucher telah melebihi batas maksimum sehingga sudah tidak berlaku lagi"))})})()}closeModal(){var i=this;return(0,r.Z)(function*(){yield i.modalController.dismiss("Wrapped Up!")})()}static \u0275fac=function(n){return new(n||g)(t.Y36(m.L),t.Y36(_.E),t.Y36(o.IN),t.Y36(o.HT),t.Y36(P.c))};static \u0275cmp=t.Xpm({type:g,selectors:[["app-voucher"]],decls:16,vars:3,consts:[[1,"ion-no-border"],["slot","end",1,"close-button",3,"click"],["name","close","color","danger"],[1,"font-bold"],[1,"ion-padding"],["class","voucher",3,"click",4,"ngFor","ngForOf"],["class","nopromo",4,"ngIf"],[1,"row"],[1,"col10"],["placeholder","Masukkan Kode Voucher...",1,"form-control",3,"ngModel","ngModelChange"],[1,"col2"],["color","primary",3,"click"],[1,"voucher",3,"click"],[1,"nama"],[1,"potongan"],[4,"ngIf"],[1,"minbeli"],[1,"nopromo"]],template:function(n,p){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.NdJ("click",function(){return p.closeModal()}),t._UZ(3,"ion-icon",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Pilih Voucher"),t.qZA()()(),t.TgZ(6,"ion-content",4),t.YNc(7,L,10,8,"div",5),t.YNc(8,I,2,0,"div",6),t.qZA(),t.TgZ(9,"ion-footer",4)(10,"div",7)(11,"div",8)(12,"ion-input",9),t.NdJ("ngModelChange",function(k){return p.kode=k}),t.qZA()(),t.TgZ(13,"div",10)(14,"ion-button",11),t.NdJ("click",function(){return p.cekVoucher()}),t._uU(15,"CEK"),t.qZA()()()()),2&n&&(t.xp6(7),t.Q6J("ngForOf",p.item),t.xp6(1),t.Q6J("ngIf",0==p.item.length),t.xp6(4),t.Q6J("ngModel",p.kode))},dependencies:[u.sg,u.O5,e.JJ,e.On,o.YG,o.Sm,o.W2,o.fr,o.Gu,o.gu,o.pK,o.wd,o.sr,o.j9,u.JJ],styles:[".nopromo[_ngcontent-%COMP%]{padding:20px;color:var(--ion-color-danger);text-align:center;border-radius:8px;border:1px solid #bdc3c7}.voucher[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #bdc3c7;padding:12px;background-color:#f9f9f9;margin-bottom:12px}.voucher[_ngcontent-%COMP%]   .nama[_ngcontent-%COMP%]{font-family:appmedium;text-transform:uppercase;margin-bottom:8px}.voucher[_ngcontent-%COMP%]   .potongan[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-family:appbold;color:var(--ion-color-primary)}.voucher[_ngcontent-%COMP%]   .minbeli[_ngcontent-%COMP%]{font-size:80%;color:#bdc3c7}"]})}return g})()},492:(U,d,s)=>{s.d(d,{L:()=>_});var r=s(3082),h=s(6689),u=s(9862),t=s(1325),m=s(3251);let _=(()=>{class o{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=r.g.webURL;API_URL=r.g.apiURL;constructor(e,a,c){this.http=e,this.navCtrl=a,this.alerts=c}apiUrl(){return this.API_URL}cekOngkir(e,a,c,L,I){return this.http.get(this.API_URL+"ceksongkir?dari="+e+"&berat="+a+"&tujuan="+c+"&kurir="+L+"&services="+I).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(e){return this.http.get(this.API_URL+"akun/bayarsaldo/"+e).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(e){return this.http.get(this.API_URL+"home/blogsingle/"+e).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(e){return this.http.get(this.API_URL+"home/getkab/"+e).pipe()}dropKec(e){return this.http.get(this.API_URL+"home/getkec/"+e).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(e,a){return this.http.post(this.API_URL+"produk/cariproduk?page="+a,{cari:e}).pipe()}getProdukKategori(e,a){return this.http.get(this.API_URL+"produk/produk?catid="+e+"&page="+a).pipe()}getProdukPPOB(e,a){return this.http.post(this.API_URL+"ppob/produk",{kategori:e,brand:a}).pipe()}getBrandPPOB(e){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:e}).pipe()}getTagihanPPOB(e,a){return this.http.post(this.API_URL+"ppob/tagihan",{kode:e,nomer:a}).pipe()}getTransaksiPPOB(e){return this.http.post(this.API_URL+"ppob/transaksi",{trx:e}).pipe()}PPOBLoad(e,a=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+e+"&perpage="+a).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(e){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+e).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(e){return this.http.get(this.API_URL+"transaksi/pembayaran/"+e).pipe()}getReview(e){return this.http.get(this.API_URL+"review/getreview/"+e).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(e){return this.http.get(this.API_URL+"akun/alamat/?page="+e).pipe()}alamatSingle(e,a,c){return this.http.get(this.API_URL+"akun/getalamat/"+e+"/"+a+"/"+c).pipe()}rekeningLoad(e,a=6){return this.http.get(this.API_URL+"akun/rekening/?page="+e+"&perpage="+a).pipe()}rekeningSingle(e){return this.http.get(this.API_URL+"akun/getrekening/"+e).pipe()}lacakPaket(e){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+e).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(e,a){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+e+"&status="+a).pipe()}pesananSingle(e){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+e).pipe()}getProdukSingle(e){return this.http.get(this.API_URL+"produk/produksingle?pid="+e).pipe()}getSize(e,a){return this.http.get(this.API_URL+"produk/size?pid="+e+"&proid="+a).pipe()}static \u0275fac=function(a){return new(a||o)(h.LFG(u.eN),h.LFG(t.SH),h.LFG(m.c))};static \u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},6828:(U,d,s)=>{s.d(d,{Z:()=>u});const r=void 0,u=["es",[["a.\xa0m.","p.\xa0m."],r,r],r,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],["DO","LU","MA","MI","JU","VI","SA"]],r,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],r,[["a. C.","d. C."],r,["antes de Cristo","despu\xe9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",r,r,r],[",",".",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","euro",{AUD:[r,"$"],BRL:[r,"R$"],BYN:[r,"\u0440."],CAD:[r,"$"],CNY:[r,"\xa5"],EGP:[],ESP:["\u20a7"],GBP:[r,"\xa3"],HKD:[r,"$"],ILS:[r,"\u20aa"],INR:[r,"\u20b9"],JPY:[r,"\xa5"],KRW:[r,"\u20a9"],MXN:[r,"$"],NZD:[r,"$"],PHP:[r,"\u20b1"],RON:[r,"L"],THB:["\u0e3f"],TWD:[r,"NT$"],USD:["US$","$"],XAF:[],XCD:[r,"$"],XOF:[]},"ltr",function h(t){const m=t,_=Math.floor(Math.abs(t)),o=t.toString().replace(/^[^.]*\.?/,"").length,P=parseInt(t.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return 1===m?1:0===P&&0!==_&&_%1e6==0&&0===o||!(P>=0&&P<=5)?4:5}]}}]);