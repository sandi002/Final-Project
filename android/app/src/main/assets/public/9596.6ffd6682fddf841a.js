"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9596],{9596:(U,_,a)=>{a.r(_),a.d(_,{PpoblistPageModule:()=>O});var l=a(6814),u=a(95),s=a(1325),P=a(8371),m=a(5861),f=a(3919),t=a(6689),x=a(492),e=a(6465),o=a(3251),d=a(5597);function v(n,h){1&n&&(t.TgZ(0,"div",29),t._uU(1,"Belum Bayar"),t.qZA())}function k(n,h){1&n&&(t.TgZ(0,"div",29),t._UZ(1,"fa-icon",30),t._uU(2," Proses"),t.qZA())}function A(n,h){1&n&&(t.TgZ(0,"div",31),t._UZ(1,"fa-icon",32),t._uU(2," Sukses"),t.qZA())}function b(n,h){1&n&&(t.TgZ(0,"div",33),t._UZ(1,"fa-icon",34),t._uU(2," Batal"),t.qZA())}function L(n,h){if(1&n){const i=t.EpF();t.TgZ(0,"ion-button",35),t.NdJ("click",function(){t.CHM(i);const g=t.oxw().index,p=t.oxw();return t.KtG(p.open(g))}),t._uU(1,"bayar"),t.qZA()}}function I(n,h){if(1&n){const i=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t.NdJ("click",function(){const p=t.CHM(i).index,c=t.oxw();return t.KtG(c.open(p))}),t.TgZ(2,"div",11)(3,"div",12)(4,"div",13),t._UZ(5,"img",14),t.qZA(),t.TgZ(6,"div",11)(7,"div",15),t._uU(8),t.qZA(),t.TgZ(9,"div",16),t._uU(10),t.qZA()()()(),t.TgZ(11,"div",17),t.YNc(12,v,2,0,"div",18),t.YNc(13,k,3,0,"div",18),t.YNc(14,A,3,0,"div",19),t.YNc(15,b,3,0,"div",20),t.qZA()(),t.TgZ(16,"div",21),t.NdJ("click",function(){const p=t.CHM(i).index,c=t.oxw();return t.KtG(c.open(p))}),t._uU(17),t.qZA(),t.TgZ(18,"div",22),t.NdJ("click",function(){const p=t.CHM(i).index,c=t.oxw();return t.KtG(c.open(p))}),t._uU(19),t.qZA(),t.TgZ(20,"div",12)(21,"div",23),t.NdJ("click",function(){const p=t.CHM(i).index,c=t.oxw();return t.KtG(c.open(p))}),t.TgZ(22,"div",24),t._uU(23,"Total Harga"),t.qZA(),t.TgZ(24,"div",25),t._uU(25),t.ALo(26,"number"),t.qZA()(),t.TgZ(27,"div",26)(28,"div",12)(29,"div",26),t.YNc(30,L,2,0,"ion-button",27),t.qZA(),t.TgZ(31,"div",26)(32,"ion-button",28),t._uU(33,"beli lagi"),t.qZA()()()()()()}if(2&n){const i=h.$implicit;t.xp6(5),t.s9C("src",i.icon,t.LSH),t.xp6(3),t.Oqu(i.kategori),t.xp6(2),t.Oqu(i.tgl),t.xp6(2),t.Q6J("ngIf",0==i.status),t.xp6(1),t.Q6J("ngIf",1==i.status),t.xp6(1),t.Q6J("ngIf",2==i.status),t.xp6(1),t.Q6J("ngIf",3==i.status),t.xp6(2),t.Oqu(i.produk.nama),t.xp6(2),t.Oqu(i.nomer),t.xp6(6),t.hij("Rp ",t.Dn7(26,12,i.bayar,"","id"),""),t.xp6(5),t.Q6J("ngIf",0==i.status),t.xp6(2),t.s9C("routerLink",i.kode)}}const C=[{path:"",component:(()=>{class n{getapi;nav;loading;postapi;alert;page=1;maximumPages=1;items=[];constructor(i,r,g,p,c){this.getapi=i,this.nav=r,this.loading=g,this.postapi=p,this.alert=c}ngOnInit(){(0,l.qS)(f.Z)}ionViewWillEnter(){var i=this;return(0,m.Z)(function*(){i.page=1,i.items=[],i.loadUsers()})()}loadMore(i){this.page++,this.page>this.maximumPages?(i.target.complete(),console.log("data dah habis bosku")):this.loadUsers(i)}loadUsers(i){var r=this;return(0,m.Z)(function*(){const g=yield r.loading.create({message:"memuat pesanan...",spinner:"circular"});i||(yield g.present()),r.getapi.PPOBLoad(r.page).subscribe(p=>{i||g.dismiss(),i&&i.target.complete(),p.success?(r.items=r.items.concat(p.data),r.maximumPages=p.maxPage):r.alert.presentToast("terjadi kesalahan saat menghubungi server")})})()}open(i){this.nav.navigateForward(["/cekoutppob/"+this.items[i].invoice])}static \u0275fac=function(r){return new(r||n)(t.Y36(x.L),t.Y36(s.SH),t.Y36(s.HT),t.Y36(e.E),t.Y36(o.c))};static \u0275cmp=t.Xpm({type:n,selectors:[["app-ppoblist"]],decls:11,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["slot","start"],["color","primary","defaultHref","/tabs/tab4"],["color","dark",1,"font-bold"],[3,"fullscreen"],["class","item",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","circular","loadingText","memuat..."],[1,"mt50","mb50","divider"],[1,"item"],[1,"row","head",3,"click"],[1,"col9"],[1,"row"],[1,"col3","text-center"],[1,"icon",3,"src"],[1,"kategori"],[1,"tgl"],[1,"col3"],["class","status orange",4,"ngIf"],["class","status green",4,"ngIf"],["class","status red",4,"ngIf"],[1,"nama",3,"click"],[1,"nomer",3,"click"],[1,"col6",3,"click"],[1,"total-title"],[1,"total"],[1,"col6"],["size","small","expand","full","color","success",3,"click",4,"ngIf"],["size","small","expand","full","color","primary",3,"routerLink"],[1,"status","orange"],["icon","clock"],[1,"status","green"],["icon","check"],[1,"status","red"],["icon","times"],["size","small","expand","full","color","success",3,"click"]],template:function(r,g){1&r&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Topup & Tagihan"),t.qZA()()(),t.TgZ(6,"ion-content",4),t.YNc(7,I,34,16,"div",5),t.TgZ(8,"ion-infinite-scroll",6),t.NdJ("ionInfinite",function(c){return g.loadMore(c)}),t._UZ(9,"ion-infinite-scroll-content",7),t.qZA(),t._UZ(10,"div",8),t.qZA()),2&r&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngForOf",g.items))},dependencies:[l.sg,l.O5,s.oU,s.YG,s.Sm,s.W2,s.Gu,s.ju,s.MB,s.wd,s.sr,s.cs,s.YI,d.BN,P.rH,l.JJ],styles:["ion-content[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background: #eaf1ff}.item[_ngcontent-%COMP%]{width:94vw;margin:1vw auto 3vw;background-color:#fff;border-radius:12px;padding:12px;box-shadow:0 0 1px 1px #dbdbdb}.item[_ngcontent-%COMP%]   .judul[_ngcontent-%COMP%]{font-family:appmedium;color:var(--ion-color-primary)}.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{max-width:100%;max-height:40px}.item[_ngcontent-%COMP%]   .kategori[_ngcontent-%COMP%]{font-size:90%;font-family:appbold}.item[_ngcontent-%COMP%]   .tgl[_ngcontent-%COMP%]{font-size:80%}.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:75%;padding:4px 8px;border-radius:8px;background-color:var(--ion-color-light-shade);text-align:center}.item[_ngcontent-%COMP%]   .status.red[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger-tint)}.item[_ngcontent-%COMP%]   .status.green[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-success)}.item[_ngcontent-%COMP%]   .status.orange[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-warning-tint)}.item[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{padding-bottom:8px;border-bottom:1px solid var(--ion-color-light-shade);margin-bottom:8px}.item[_ngcontent-%COMP%]   .nama[_ngcontent-%COMP%]{font-family:appbold}.item[_ngcontent-%COMP%]   .nomer[_ngcontent-%COMP%]{margin-bottom:12px;font-size:95%}.item[_ngcontent-%COMP%]   .total-title[_ngcontent-%COMP%]{font-size:85%}.item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-family:appbold}.item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-top: 4px;--padding-bottom: 4px}"]})}return n})()}];let R=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[P.Bz.forChild(C),P.Bz]})}return n})(),O=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[l.ez,u.u5,s.Pc,d.uH,R]})}return n})()},492:(U,_,a)=>{a.d(_,{L:()=>f});var l=a(3082),u=a(6689),s=a(9862),P=a(1325),m=a(3251);let f=(()=>{class t{http;navCtrl;alerts;isLoggedIn=!1;serverUP=!1;token;dataResult="error";APP_URL=l.g.webURL;API_URL=l.g.apiURL;constructor(e,o,d){this.http=e,this.navCtrl=o,this.alerts=d}apiUrl(){return this.API_URL}cekOngkir(e,o,d,v,k){return this.http.get(this.API_URL+"ceksongkir?dari="+e+"&berat="+o+"&tujuan="+d+"&kurir="+v+"&services="+k).pipe()}getLogin(){return this.http.get(this.API_URL+"auth/loginmode").pipe()}getSaldo(){return this.http.get(this.API_URL+"akun/saldo").pipe()}getBayarSaldo(e){return this.http.get(this.API_URL+"akun/bayarsaldo/"+e).pipe()}getSlider(){return this.http.get(this.API_URL+"home/slider").pipe()}getPromo(){return this.http.get(this.API_URL+"home/promo").pipe()}getBlog(){return this.http.get(this.API_URL+"home/blog").pipe()}getBlogSingle(e){return this.http.get(this.API_URL+"home/blogsingle/"+e).pipe()}dropBank(){return this.http.get(this.API_URL+"home/getbank").pipe()}wasapRotator(){return this.http.get(this.API_URL+"home/getwhatsapp").pipe()}dropProv(){return this.http.get(this.API_URL+"home/getprov").pipe()}dropKab(e){return this.http.get(this.API_URL+"home/getkab/"+e).pipe()}dropKec(e){return this.http.get(this.API_URL+"home/getkec/"+e).pipe()}getTestimoni(){return this.http.get(this.API_URL+"home/testimoni").pipe()}getProduk(){return this.http.get(this.API_URL+"produk/produkterbaru").pipe()}getProdukDigital(){return this.http.get(this.API_URL+"produk/produkdigital").pipe()}getProdukPO(){return this.http.get(this.API_URL+"produk/produkpreorder").pipe()}cariProduk(e,o){return this.http.post(this.API_URL+"produk/cariproduk?page="+o,{cari:e}).pipe()}getProdukKategori(e,o){return this.http.get(this.API_URL+"produk/produk?catid="+e+"&page="+o).pipe()}getProdukPPOB(e,o){return this.http.post(this.API_URL+"ppob/produk",{kategori:e,brand:o}).pipe()}getBrandPPOB(e){return this.http.post(this.API_URL+"ppob/produkbrand",{kategori:e}).pipe()}getTagihanPPOB(e,o){return this.http.post(this.API_URL+"ppob/tagihan",{kode:e,nomer:o}).pipe()}getTransaksiPPOB(e){return this.http.post(this.API_URL+"ppob/transaksi",{trx:e}).pipe()}PPOBLoad(e,o=10){return this.http.get(this.API_URL+"ppob/transaksilist?page="+e+"&perpage="+o).pipe()}getNotif(){return this.http.get(this.API_URL+"home/notif").pipe()}getChat(){return this.http.get(this.API_URL+"pesan/chat").pipe()}getVoucher(e){return this.http.get(this.API_URL+"transaksi/getvoucher?digital="+e).pipe()}getBayar(){return this.http.get(this.API_URL+"transaksi/bayarpesanan").pipe()}getBayarDigital(){return this.http.get(this.API_URL+"transaksi/bayarpesanandigital").pipe()}getBayarDetail(e){return this.http.get(this.API_URL+"transaksi/pembayaran/"+e).pipe()}getReview(e){return this.http.get(this.API_URL+"review/getreview/"+e).pipe()}getKategori(){return this.http.get(this.API_URL+"home/kategori").pipe()}getKeranjang(){return this.http.get(this.API_URL+"transaksi/keranjang").pipe()}alamatLoad(e){return this.http.get(this.API_URL+"akun/alamat/?page="+e).pipe()}alamatSingle(e,o,d){return this.http.get(this.API_URL+"akun/getalamat/"+e+"/"+o+"/"+d).pipe()}rekeningLoad(e,o=6){return this.http.get(this.API_URL+"akun/rekening/?page="+e+"&perpage="+o).pipe()}rekeningSingle(e){return this.http.get(this.API_URL+"akun/getrekening/"+e).pipe()}lacakPaket(e){return this.http.get(this.API_URL+"home/lacakiriman/?trx="+e).pipe()}profilLoad(){return this.http.get(this.API_URL+"akun/profil")}pesananLoad(e,o){return this.http.get(this.API_URL+"transaksi/pesanan/?page="+e+"&status="+o).pipe()}pesananSingle(e){return this.http.get(this.API_URL+"transaksi/pesanansingle/"+e).pipe()}getProdukSingle(e){return this.http.get(this.API_URL+"produk/produksingle?pid="+e).pipe()}getSize(e,o){return this.http.get(this.API_URL+"produk/size?pid="+e+"&proid="+o).pipe()}static \u0275fac=function(o){return new(o||t)(u.LFG(s.eN),u.LFG(P.SH),u.LFG(m.c))};static \u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);