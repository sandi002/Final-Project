"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8370],{8370:(A,v,o)=>{o.r(v),o.d(v,{SignupPageModule:()=>b});var m=o(6814),g=o(95),P=o(8371),u=o(1325),_=o(5861),c=o(590),l=o(3082),t=o(6689),i=o(5148),s=o(492),d=o(3251),k=o(5597);function f(n,h){1&n&&(t.TgZ(0,"div",15),t._uU(1," Masukkan nomor whatsapp atau alamat email anda untuk mengirimkan kode otp "),t.qZA())}function U(n,h){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"fa-icon",18),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"input",20),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.user)}}function L(n,h){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"fa-icon",18),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"input",21),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.user)}}function T(n,h){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"fa-icon",18),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"input",22),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.email)}}function I(n,h){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"fa-icon",18),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"input",23),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.hp)}}function R(n,h){if(1&n&&(t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"fa-icon",18),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"input",24),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.unlock)}}function Z(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._uU(2," MENDAFTAR "),t.qZA(),t.YNc(3,f,2,0,"div",10),t.TgZ(4,"form",11,12),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.MAs(5),p=t.oxw();return t.KtG(p.register(r))}),t.YNc(6,U,5,1,"div",13),t.YNc(7,L,5,1,"div",13),t.YNc(8,T,5,1,"div",13),t.YNc(9,I,5,1,"div",13),t.YNc(10,R,5,1,"div",13),t.TgZ(11,"ion-button",14),t._uU(12,"Mendaftar"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",1==e.mode),t.xp6(3),t.Q6J("ngIf",2==e.mode),t.xp6(1),t.Q6J("ngIf",1==e.mode),t.xp6(1),t.Q6J("ngIf",2==e.mode),t.xp6(1),t.Q6J("ngIf",2==e.mode),t.xp6(1),t.Q6J("ngIf",2==e.mode)}}function x(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",25),t._uU(2," Masukkan kode otp yang telah kami kirim ke whatsapp atau email "),t.qZA(),t.TgZ(3,"div",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.resend())}),t._UZ(4,"fa-icon",27),t._uU(5," Kirim ulang kode OTP"),t.qZA(),t.TgZ(6,"div",28)(7,"input",29),t.NdJ("ngModelChange",function(r){t.CHM(e);const p=t.oxw();return t.KtG(p.kodeotp=r)}),t.qZA()(),t.TgZ(8,"ion-button",30),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.lanjut())}),t._uU(9,"Lanjutkan"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.kodeotp)}}const S=[{path:"",component:(()=>{class n{authService;navCtrl;loadingCtrl;getapi;alertService;user=c.ILF;email=c.FU$;hp=c.j1w;unlock=c.tAh;mode=1;otp;otpid=0;kodeotp="";weburl=l.g.webURL;constructor(e,a,r,p,y){this.authService=e,this.navCtrl=a,this.loadingCtrl=r,this.getapi=p,this.alertService=y}ngOnInit(){}ionViewWillEnter(){this.getapi.getLogin().subscribe(e=>{1==e.success&&(this.mode=e.mode)})}register(e){var a=this;return(0,_.Z)(function*(){const r=yield a.loadingCtrl.create({message:"Tunggu sebentar..."});yield r.present(),2==a.mode?a.authService.register(e.value.nama,e.value.email,e.value.password,e.value.nohp).subscribe(p=>{r.dismiss(),1==p.success?(a.alertService.presentToast("berhasil mendaftar, kami telah mengirimkan link verifikasi ke email dan silahkan verifikasi akun Anda terlebih dahulu"),a.navCtrl.navigateRoot("/login")):a.alertService.presentToast(p.message)},p=>{r.dismiss(),console.log(p),a.alertService.presentToast(p)},()=>{}):a.authService.registerOTP(e.value.email).subscribe(p=>{r.dismiss(),1==p.success?(a.otp=!0,a.otpid=p.otpid):a.alertService.presentAlert("gagal mendaftar","silahkan cek kembali nomor whatsapp atau email Anda mungkin sudah terdaftar")},p=>{r.dismiss(),console.log(p),a.alertService.presentToast(p)})})()}lanjut(){var e=this;return(0,_.Z)(function*(){const a=yield e.loadingCtrl.create({message:"Tunggu sebentar..."});yield a.present(),e.authService.postregisterOTP(e.kodeotp,e.otpid).subscribe(r=>{a.dismiss(),1==r.success?(e.alertService.presentToast("Selamat datang "+r.nama),e.navCtrl.navigateRoot("/")):e.alertService.presentAlert("Kode OTP Salah","silahkan cek kembali kode OTP terbaru yang sudah kami kirim ke whatsapp atau email Anda")},r=>{a.dismiss(),console.log(r),e.alertService.presentToast(r)})})()}resend(){var e=this;return(0,_.Z)(function*(){const a=yield e.loadingCtrl.create({message:"Tunggu sebentar..."});yield a.present(),e.authService.registerOTPResend(e.otpid).subscribe(r=>{a.dismiss(),1==r.success?(e.alertService.presentToast("Kode OTP berhasil dikirim, silahkan cek kembali"),e.otpid=r.otpid):e.alertService.presentAlert("Kode OTP Salah","silahkan cek kembali kode OTP terbaru yang sudah kami kirim ke whatsapp atau email Anda")},r=>{a.dismiss(),console.log(r),e.alertService.presentToast(r)})})()}static \u0275fac=function(a){return new(a||n)(t.Y36(i.e),t.Y36(u.SH),t.Y36(u.HT),t.Y36(s.L),t.Y36(d.c))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-signup"]],decls:18,vars:2,consts:[[1,"ion-padding"],[1,"logo"],["src","/assets/logo.png","alt","logo"],["class","sign-wrap",4,"ngIf"],[1,"text-center"],["href","https://distrohistory.my.id/page/Syarat-Ketentuan-Layanan","target","_blank"],["href","https://distrohistory.my.id/page/Kebijakan-Privasi","target","_blank"],["href","#","routerLink","/login",1,"link"],[1,"sign-wrap"],[1,"title","font-mon-black","text-primary"],["class","mb20 text-center",4,"ngIf"],["method","post",3,"ngSubmit"],["form","ngForm"],["class","row form-group",4,"ngIf"],["type","submit","expand","full",1,"btn-primary","mb50","mt30"],[1,"mb20","text-center"],[1,"row","form-group"],[1,"col1","text-info"],[3,"icon"],[1,"col11"],["placeholder","Nama Lengkap","ngModel","","name","nama"],["placeholder","No Whatsapp / Email","ngModel","","name","email"],["placeholder","Alamat Email","ngModel","","name","email"],["placeholder","No Whatsapp","ngModel","","name","nohp"],["placeholder","Password","type","password","ngModel","","name","password"],[1,"mb20"],[1,"text-primary","mb20","text-center",3,"click"],["icon","sync-alt"],[1,"form-group"],["placeholder","kode OTP",1,"text-center","otp",3,"ngModel","ngModelChange"],["expand","full",1,"btn-primary",3,"click"]],template:function(a,r){1&a&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.YNc(3,Z,13,6,"div",3),t.YNc(4,x,10,1,"div",3),t.TgZ(5,"div",4),t._uU(6," Dengan Mendaftar, Anda setuju dengan "),t.TgZ(7,"a",5),t._uU(8,"Syarat & Ketentuan Layanan"),t.qZA(),t._uU(9," dan "),t.TgZ(10,"a",6),t._uU(11,"Kebijakan Privasi"),t.qZA(),t._uU(12," Kami "),t.qZA()(),t.TgZ(13,"ion-footer",0)(14,"div",4),t._uU(15," Belum punya Akun? "),t.TgZ(16,"a",7),t._uU(17,"Masuk"),t.qZA()()()),2&a&&(t.xp6(3),t.Q6J("ngIf",!r.otp),t.xp6(1),t.Q6J("ngIf",r.otp))},dependencies:[m.O5,g._Y,g.Fj,g.JJ,g.JL,g.On,g.F,u.YG,u.W2,u.fr,u.Fo,k.BN,P.rH],styles:["ion-button[_ngcontent-%COMP%]{font-size:110%}.sign-wrap[_ngcontent-%COMP%]{width:96%;margin:auto;padding:12px;margin-top:6vh}.row.mb40[_ngcontent-%COMP%]{margin:0 -6px}.col6[_ngcontent-%COMP%]{padding:6px}.title[_ngcontent-%COMP%]{font-size:16pt}.form-group[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium)}.link[_ngcontent-%COMP%]{font-family:appmedium;text-decoration:none}.otp[_ngcontent-%COMP%]{font-size:160%;font-family:appbold;letter-spacing:2px}"]})}return n})()}];let b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[m.ez,g.u5,u.Pc,k.uH,P.Bz.forChild(S)]})}return n})()},492:(A,v,o)=>{o.d(v,{L:()=>c});var m=o(3082),g=o(6689),P=o(9862),u=o(1325),_=o(3251);let c=(()=>{class l{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=m.g.webURL;API_URL=m.g.apiURL;constructor(i,s,d){this.http=i,this.navCtrl=s,this.alerts=d}apiUrl(){return this.API_URL}cekOngkir(i,s,d,k,f){return this.http.get(this.API_URL+"ceksongkir?dari="+i+"&berat="+s+"&tujuan="+d+"&kurir="+k+"&services="+f).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(i){return this.http.get(this.API_URL+"akun/bayarsaldo/"+i).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(i){return this.http.get(this.API_URL+"home/blogsingle/"+i).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(i){return this.http.get(this.API_URL+"home/getkab/"+i).pipe()}dropKec(i){return this.http.get(this.API_URL+"home/getkec/"+i).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(i,s){return this.http.post(this.API_URL+"produk/cariproduk?page="+s,{cari:i}).pipe()}getProdukKategori(i,s){return this.http.get(this.API_URL+"produk/produk?catid="+i+"&page="+s).pipe()}getProdukPPOB(i,s){return this.http.post(this.API_URL+"ppob/produk",{kategori:i,brand:s}).pipe()}getBrandPPOB(i){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:i}).pipe()}getTagihanPPOB(i,s){return this.http.post(this.API_URL+"ppob/tagihan",{kode:i,nomer:s}).pipe()}getTransaksiPPOB(i){return this.http.post(this.API_URL+"ppob/transaksi",{trx:i}).pipe()}PPOBLoad(i,s=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+i+"&perpage="+s).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(i){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+i).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(i){return this.http.get(this.API_URL+"transaksi/pembayaran/"+i).pipe()}getReview(i){return this.http.get(this.API_URL+"review/getreview/"+i).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(i){return this.http.get(this.API_URL+"akun/alamat/?page="+i).pipe()}alamatSingle(i,s,d){return this.http.get(this.API_URL+"akun/getalamat/"+i+"/"+s+"/"+d).pipe()}rekeningLoad(i,s=6){return this.http.get(this.API_URL+"akun/rekening/?page="+i+"&perpage="+s).pipe()}rekeningSingle(i){return this.http.get(this.API_URL+"akun/getrekening/"+i).pipe()}lacakPaket(i){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+i).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(i,s){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+i+"&status="+s).pipe()}pesananSingle(i){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+i).pipe()}getProdukSingle(i){return this.http.get(this.API_URL+"produk/produksingle?pid="+i).pipe()}getSize(i,s){return this.http.get(this.API_URL+"produk/size?pid="+i+"&proid="+s).pipe()}static \u0275fac=function(s){return new(s||l)(g.LFG(P.eN),g.LFG(u.SH),g.LFG(_.c))};static \u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);