"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8432],{492:(L,c,n)=>{n.d(c,{L:()=>b});var r=n(3082),h=n(6689),P=n(9862),u=n(1325),l=n(3251);let b=(()=>{class g{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=r.g.webURL;API_URL=r.g.apiURL;constructor(t,a,p){this.http=t,this.navCtrl=a,this.alerts=p}apiUrl(){return this.API_URL}cekOngkir(t,a,p,m,U){return this.http.get(this.API_URL+"ceksongkir?dari="+t+"&berat="+a+"&tujuan="+p+"&kurir="+m+"&services="+U).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(t){return this.http.get(this.API_URL+"akun/bayarsaldo/"+t).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(t){return this.http.get(this.API_URL+"home/blogsingle/"+t).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(t){return this.http.get(this.API_URL+"home/getkab/"+t).pipe()}dropKec(t){return this.http.get(this.API_URL+"home/getkec/"+t).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(t,a){return this.http.post(this.API_URL+"produk/cariproduk?page="+a,{cari:t}).pipe()}getProdukKategori(t,a){return this.http.get(this.API_URL+"produk/produk?catid="+t+"&page="+a).pipe()}getProdukPPOB(t,a){return this.http.post(this.API_URL+"ppob/produk",{kategori:t,brand:a}).pipe()}getBrandPPOB(t){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:t}).pipe()}getTagihanPPOB(t,a){return this.http.post(this.API_URL+"ppob/tagihan",{kode:t,nomer:a}).pipe()}getTransaksiPPOB(t){return this.http.post(this.API_URL+"ppob/transaksi",{trx:t}).pipe()}PPOBLoad(t,a=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+t+"&perpage="+a).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(t){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+t).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(t){return this.http.get(this.API_URL+"transaksi/pembayaran/"+t).pipe()}getReview(t){return this.http.get(this.API_URL+"review/getreview/"+t).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(t){return this.http.get(this.API_URL+"akun/alamat/?page="+t).pipe()}alamatSingle(t,a,p){return this.http.get(this.API_URL+"akun/getalamat/"+t+"/"+a+"/"+p).pipe()}rekeningLoad(t,a=6){return this.http.get(this.API_URL+"akun/rekening/?page="+t+"&perpage="+a).pipe()}rekeningSingle(t){return this.http.get(this.API_URL+"akun/getrekening/"+t).pipe()}lacakPaket(t){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+t).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(t,a){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+t+"&status="+a).pipe()}pesananSingle(t){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+t).pipe()}getProdukSingle(t){return this.http.get(this.API_URL+"produk/produksingle?pid="+t).pipe()}getSize(t,a){return this.http.get(this.API_URL+"produk/size?pid="+t+"&proid="+a).pipe()}static \u0275fac=function(a){return new(a||g)(h.LFG(P.eN),h.LFG(u.SH),h.LFG(l.c))};static \u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},8432:(L,c,n)=>{n.r(c),n.d(c,{TabsPageModule:()=>f});var r=n(1325),h=n(6814),P=n(95),u=n(8371),l=n(4201),b=n(5861),g=n(8567),e=n(6689),t=n(492),a=n(2090),p=n(5597);function m(i,R){if(1&i&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Oqu(o.keranjang)}}const A=[{path:"tabs",component:(()=>{class i{navCtrl;getapi;events;modalController;cariText="";keranjang=0;constructor(o,s,d,v){this.navCtrl=o,this.getapi=s,this.events=d,this.modalController=v}ionViewWillEnter(){this.keranjangs(),this.events.getObservable().subscribe(o=>{"keranjang"==o&&this.keranjangs()})}ionTabsDidChange(){this.keranjangs()}presentModal(){var o=this;return(0,b.Z)(function*(){return yield(yield o.modalController.create({component:g.z,cssClass:"auto-height"})).present()})()}keranjangs(){this.getapi.getNotif().subscribe(o=>{this.keranjang=1==o.success?o.keranjang:0})}static \u0275fac=function(s){return new(s||i)(e.Y36(r.SH),e.Y36(t.L),e.Y36(a.n),e.Y36(r.IN))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-tabs"]],decls:26,vars:1,consts:[[1,"center-btn",3,"click"],["icon","message"],["slot","bottom"],["tab","tab1"],["name","home-outline"],["name","home",1,"active"],["tab","tab2"],["name","bag-handle-outline"],["name","bag-handle",1,"active"],["class","counter",4,"ngIf"],["tab","tab3"],["name","receipt-outline"],["name","receipt",1,"active"],["tab","tab4"],["name","person-outline"],["name","person",1,"active"],[1,"counter"]],template:function(s,d){1&s&&(e.TgZ(0,"ion-tabs")(1,"div",0),e.NdJ("click",function(){return d.presentModal()}),e._UZ(2,"fa-icon",1),e.qZA(),e.TgZ(3,"ion-tab-bar",2)(4,"ion-tab-button",3),e._UZ(5,"ion-icon",4)(6,"ion-icon",5),e.TgZ(7,"ion-label"),e._uU(8,"Beranda"),e.qZA()(),e.TgZ(9,"ion-tab-button",6),e._UZ(10,"ion-icon",7)(11,"ion-icon",8),e.TgZ(12,"ion-label"),e._uU(13,"Keranjang"),e.qZA(),e.YNc(14,m,2,1,"div",9),e.qZA(),e._UZ(15,"ion-tab-button"),e.TgZ(16,"ion-tab-button",10),e._UZ(17,"ion-icon",11)(18,"ion-icon",12),e.TgZ(19,"ion-label"),e._uU(20,"Transaksi"),e.qZA()(),e.TgZ(21,"ion-tab-button",13),e._UZ(22,"ion-icon",14)(23,"ion-icon",15),e.TgZ(24,"ion-label"),e._uU(25,"Akunku"),e.qZA()()()()),2&s&&(e.xp6(14),e.Q6J("ngIf",d.keranjang>0))},dependencies:[r.gu,r.Q$,r.yq,r.ZU,r.UN,h.O5,p.BN],styles:["ion-tabs[_ngcontent-%COMP%]{--background: transparent}ion-tab-bar[_ngcontent-%COMP%]{border:unset;box-shadow:0 0 12px #e0e4e6;overflow:visible!important;border-radius:16px;width:96vw;margin:auto;margin-bottom:2vw;margin-top:-16vw}ion-icon.active[_ngcontent-%COMP%]{display:none}ion-icon[_ngcontent-%COMP%]{font-size:16pt}ion-tab-button[_ngcontent-%COMP%]{padding:4px 0;background:transparent;font-size:70%;color:#757575;font-family:appbold;overflow:visible!important}ion-tab-button.tab-selected[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:none}ion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon.active[_ngcontent-%COMP%]{display:block}.center-btn[_ngcontent-%COMP%]{box-shadow:0 0 12px #e0e4e6;color:#fff;background-color:var(--ion-color-primary);border-radius:64px;width:64px;height:64px;text-align:center;display:flex;justify-content:center;align-items:center;position:fixed;bottom:12px;left:50vw;margin-left:-32px;z-index:3000}.center-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:28px}.counter[_ngcontent-%COMP%]{padding:2px 6px;border-radius:20px;background-color:var(--ion-color-danger);color:#fff;font-family:appbold;position:absolute;right:4px;top:4px}"]})}return i})(),children:[{path:"tab1",children:[{path:"",loadChildren:()=>Promise.all([n.e(8592),n.e(7292)]).then(n.bind(n,7292)).then(i=>i.Tab1PageModule)}]},{path:"tab2",children:[{path:"",loadChildren:()=>n.e(4034).then(n.bind(n,4034)).then(i=>i.Tab2PageModule),canActivate:[l.a]}]},{path:"tab3",children:[{path:"",loadChildren:()=>n.e(1065).then(n.bind(n,1065)).then(i=>i.Tab3PageModule),canActivate:[l.a]}]},{path:"tab4",children:[{path:"",loadChildren:()=>n.e(9975).then(n.bind(n,9975)).then(i=>i.Tab4PageModule),canActivate:[l.a]}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let k=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[u.Bz.forChild(A),u.Bz]})}return i})(),f=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[r.Pc,h.ez,P.u5,p.uH,k]})}return i})()}}]);