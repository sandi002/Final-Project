"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6841],{6841:(U,_,p)=>{p.r(_),p.d(_,{KategoriPageModule:()=>x});var l=p(6814),d=p(95),c=p(8371),g=p(1325),k=p(5861),m=p(527),t=p(6689),A=p(9140),e=p(3251),a=p(492);function u(n,P){if(1&n&&(t.TgZ(0,"i"),t._uU(1),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.hij("",i.hargadiskon,"\xa0")}}function f(n,P){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.hij("",i.diskon,"%")}}const v=function(n){return{"background-image":n}};function L(n,P){if(1&n){const i=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13),t.NdJ("click",function(){const h=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.loadProduk(h.id))}),t.qZA(),t.TgZ(3,"div",14),t.NdJ("click",function(){const h=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.loadProduk(h.id))}),t._uU(4),t.qZA(),t.TgZ(5,"div",15),t.NdJ("click",function(){const h=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.loadProduk(h.id))}),t._uU(6),t.qZA(),t.TgZ(7,"div",16),t.NdJ("click",function(){const h=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.loadProduk(h.id))}),t.YNc(8,u,2,1,"i",17),t._uU(9,"\xa0 "),t.YNc(10,f,2,1,"span",17),t._UZ(11,"br"),t._uU(12),t.qZA(),t.TgZ(13,"div",18)(14,"ion-button",19),t.NdJ("click",function(){const h=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.tambahKeranjang(h.id))}),t._uU(15,"Beli Sekarang"),t.qZA()()()()}if(2&n){const i=P.$implicit;t.xp6(2),t.Q6J("ngStyle",t.VKq(6,v,"url("+i.foto+")")),t.xp6(2),t.Oqu(i.nama),t.xp6(2),t.hij("stok: ",i.stok,""),t.xp6(2),t.Q6J("ngIf",null!=i.hargadiskon),t.xp6(2),t.Q6J("ngIf",null!=i.hargadiskon),t.xp6(2),t.hij(" ",i.harga," ")}}function I(n,P){if(1&n&&(t.TgZ(0,"div",20),t._uU(1),t._UZ(2,"br"),t._uU(3," Silahkan pilih produk di kategori yang lain, atau hubungi admin melalui Live Chat untuk menanyakan informasi produk. "),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.hij(" Belum ada produk tersedia pada kategori ",i.kategori,"")}}const R=[{path:"",component:(()=>{class n{storage;router;loading;alert;getapi;activatedRoute;navCtrl;modalController;produk=[];page=1;maximumPages=1;id;kategori;kosong=!1;constructor(i,o,r,h,s,C,K,T){this.storage=i,this.router=o,this.loading=r,this.alert=h,this.getapi=s,this.activatedRoute=C,this.navCtrl=K,this.modalController=T}ngOnInit(){}ionViewWillEnter(){var i=this;return(0,k.Z)(function*(){i.page=1,i.produk=[],i.id=i.activatedRoute.snapshot.paramMap.get("id"),i.getPro(i.id)})()}loadProduk(i){this.navCtrl.navigateForward("produks/"+i)}loadMore(i){this.page++,this.page>this.maximumPages?(i.target.disabled=!0,console.log("data dah habis bosku")):this.getPro(this.id,i)}getPro(i,o){var r=this;return(0,k.Z)(function*(){const h=yield r.loading.create({message:"Memuat produk...",spinner:"crescent"});o||(yield h.present()),r.getapi.getProdukKategori(i,r.page).subscribe(s=>{o||h.dismiss(),o&&o.target.complete(),1==s.success?(r.produk=r.produk.concat(s.result),r.kategori=s.kategori,r.maximumPages=s.maxPage):0==s.sesihabis?(r.kosong=!0,r.kategori=s.kategori):r.alert.presentToast("gagal memuat produk")},s=>{h.dismiss()})})()}tambahKeranjang(i){this.storage.getData("data").then(o=>{0!=(o=JSON.parse(o)).usrid?this.addKrj(i):this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(r=>{this.router.navigate(1==r.data?["/login"]:["/"])})},o=>{this.alert.konfirmasi("Login","Silahkan login atau mendaftar terlebih dahulu").then(r=>{this.router.navigate(1==r.data?["/login"]:["/"])})})}addKrj(i){var o=this;return(0,k.Z)(function*(){return yield(yield o.modalController.create({component:m.V,cssClass:"tambahkeranjang",componentProps:{id:i}})).present()})()}static \u0275fac=function(o){return new(o||n)(t.Y36(A.V),t.Y36(c.F0),t.Y36(g.HT),t.Y36(e.c),t.Y36(a.L),t.Y36(c.gz),t.Y36(g.SH),t.Y36(g.IN))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-kategori"]],decls:14,vars:3,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/","color","primary"],["color","dark",1,"font-bold"],[1,"newproduct"],[1,"row"],["class","col6",4,"ngFor","ngForOf"],["class","kosong",4,"ngIf"],["threshold","10px",3,"ionInfinite"],["loadingSpinner","circular","loadingText","memuat..."],[1,"mt50","mb50","divider"],[1,"col6"],[1,"prod-wrap"],[1,"img",3,"ngStyle","click"],[1,"prod-title",3,"click"],[1,"prod-title","mb10",3,"click"],[1,"prod-harga",3,"click"],[4,"ngIf"],[1,"prod-uls"],["color","primary","expand","full",3,"click"],[1,"kosong"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",4)(8,"div",5),t.YNc(9,L,16,8,"div",6),t.qZA(),t.YNc(10,I,4,1,"div",7),t.qZA(),t.TgZ(11,"ion-infinite-scroll",8),t.NdJ("ionInfinite",function(s){return r.loadMore(s)}),t._UZ(12,"ion-infinite-scroll-content",9),t.qZA(),t._UZ(13,"div",10),t.qZA()),2&o&&(t.xp6(5),t.Oqu(r.kategori),t.xp6(4),t.Q6J("ngForOf",r.produk),t.xp6(1),t.Q6J("ngIf",r.kosong))},dependencies:[l.sg,l.O5,l.PC,g.oU,g.YG,g.Sm,g.W2,g.Gu,g.ju,g.MB,g.wd,g.sr,g.cs],styles:[".kosong[_ngcontent-%COMP%]{margin-top:20vw;font-weight:700;text-align:center;padding:10px;color:#e74c3c}"]})}return n})()}];let x=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[l.ez,d.u5,g.Pc,d.UX,c.Bz.forChild(R)]})}return n})()},492:(U,_,p)=>{p.d(_,{L:()=>m});var l=p(3082),d=p(6689),c=p(9862),g=p(1325),k=p(3251);let m=(()=>{class t{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=l.g.webURL;API_URL=l.g.apiURL;constructor(e,a,u){this.http=e,this.navCtrl=a,this.alerts=u}apiUrl(){return this.API_URL}cekOngkir(e,a,u,f,v){return this.http.get(this.API_URL+"ceksongkir?dari="+e+"&berat="+a+"&tujuan="+u+"&kurir="+f+"&services="+v).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(e){return this.http.get(this.API_URL+"akun/bayarsaldo/"+e).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(e){return this.http.get(this.API_URL+"home/blogsingle/"+e).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(e){return this.http.get(this.API_URL+"home/getkab/"+e).pipe()}dropKec(e){return this.http.get(this.API_URL+"home/getkec/"+e).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(e,a){return this.http.post(this.API_URL+"produk/cariproduk?page="+a,{cari:e}).pipe()}getProdukKategori(e,a){return this.http.get(this.API_URL+"produk/produk?catid="+e+"&page="+a).pipe()}getProdukPPOB(e,a){return this.http.post(this.API_URL+"ppob/produk",{kategori:e,brand:a}).pipe()}getBrandPPOB(e){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:e}).pipe()}getTagihanPPOB(e,a){return this.http.post(this.API_URL+"ppob/tagihan",{kode:e,nomer:a}).pipe()}getTransaksiPPOB(e){return this.http.post(this.API_URL+"ppob/transaksi",{trx:e}).pipe()}PPOBLoad(e,a=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+e+"&perpage="+a).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(e){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+e).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(e){return this.http.get(this.API_URL+"transaksi/pembayaran/"+e).pipe()}getReview(e){return this.http.get(this.API_URL+"review/getreview/"+e).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(e){return this.http.get(this.API_URL+"akun/alamat/?page="+e).pipe()}alamatSingle(e,a,u){return this.http.get(this.API_URL+"akun/getalamat/"+e+"/"+a+"/"+u).pipe()}rekeningLoad(e,a=6){return this.http.get(this.API_URL+"akun/rekening/?page="+e+"&perpage="+a).pipe()}rekeningSingle(e){return this.http.get(this.API_URL+"akun/getrekening/"+e).pipe()}lacakPaket(e){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+e).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(e,a){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+e+"&status="+a).pipe()}pesananSingle(e){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+e).pipe()}getProdukSingle(e){return this.http.get(this.API_URL+"produk/produksingle?pid="+e).pipe()}getSize(e,a){return this.http.get(this.API_URL+"produk/size?pid="+e+"&proid="+a).pipe()}static \u0275fac=function(a){return new(a||t)(d.LFG(c.eN),d.LFG(g.SH),d.LFG(k.c))};static \u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);