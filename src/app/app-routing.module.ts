import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { TokenGuard } from './guard/token.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [TokenGuard]
  },
  { 
    path: 'login', 
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule) 
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule) 
  },
  { 
    path: 'lupapassword', 
    loadChildren: () => import('./auth/lupapassword/lupapassword.module').then( m => m.LupapasswordPageModule) 
  },
  { 
    path: 'kategori/:id', 
    loadChildren: () => import('./pages/kategori/kategori.module').then( m => m.KategoriPageModule) 
  },
  { 
    path: 'produks/:id', 
    loadChildren: () => import('./pages/produks/produks.module').then( m => m.ProduksPageModule) 
  },
  { 
    path: 'cekout', 
    loadChildren: () => import('./pages/cekout/cekout.module').then( m => m.CekoutPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'chat', 
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'pembayaran', 
    loadChildren: () => import('./pages/pembayaran/pembayaran.module').then( m => m.PembayaranPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'detailpesanan/:id', 
    loadChildren: () => import('./pages/detailpesanan/detailpesanan.module').then( m => m.DetailpesananPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'alamat', 
    loadChildren: () => import('./pages/alamat/alamat.module').then( m => m.AlamatPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'cekoutalamat', 
    loadChildren: () => import('./pages/cekoutalamat/cekoutalamat.module').then( m => m.CekoutalamatPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'editalamat/:id', 
    loadChildren: () => import('./pages/editalamat/editalamat.module').then( m => m.EditalamatPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'tambahalamat/:id', 
    loadChildren: () => import('./pages/tambahalamat/tambahalamat.module').then( m => m.TambahalamatPageModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'bayarpesanan/:id', 
    loadChildren: () => import('./pages/bayarpesanan/bayarpesanan.module').then( m => m.BayarpesananPageModule), 
    canActivate: [AuthGuard] 
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rekening',
    loadChildren: () => import('./pages/rekening/rekening.module').then( m => m.RekeningPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'gantipass',
    loadChildren: () => import('./pages/gantipass/gantipass.module').then( m => m.GantipassPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'editrekening/:id',
    loadChildren: () => import('./pages/editrekening/editrekening.module').then( m => m.EditrekeningPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lacakpaket/:id',
    loadChildren: () => import('./pages/lacakpaket/lacakpaket.module').then( m => m.LacakpaketPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'getoken',
    loadChildren: () => import('./auth/getoken/getoken.module').then( m => m.GetokenPageModule)
  },
  {
    path: 'bayarproses/:id',
    loadChildren: () => import('./pages/bayarproses/bayarproses.module').then( m => m.BayarprosesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'saldo',
    loadChildren: () => import('./pages/saldo/saldo.module').then( m => m.SaldoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modalchat',
    loadChildren: () => import('./pages/modalchat/modalchat.module').then( m => m.ModalchatPageModule)
  },
  {
    path: 'bayarprosesmidtrans/:id',
    loadChildren: () => import('./pages/bayarprosesmidtrans/bayarprosesmidtrans.module').then( m => m.BayarprosesmidtransPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cariproduk',
    loadChildren: () => import('./pages/cariproduk/cariproduk.module').then( m => m.CariprodukPageModule)
  },
  {
    path: 'review/:id',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'kategorilist',
    loadChildren: () => import('./pages/kategorilist/kategorilist.module').then( m => m.KategorilistPageModule)
  },
  {
    path: 'tambahkeranjang',
    loadChildren: () => import('./modals/tambahkeranjang/tambahkeranjang.module').then( m => m.TambahkeranjangPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'produklist',
    loadChildren: () => import('./pages/produklist/produklist.module').then( m => m.ProduklistPageModule)
  },
  {
    path: 'voucher',
    loadChildren: () => import('./modals/voucher/voucher.module').then( m => m.VoucherPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'topup',
    loadChildren: () => import('./modals/topup/topup.module').then( m => m.TopupPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tarik',
    loadChildren: () => import('./modals/tarik/tarik.module').then( m => m.TarikPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bayarsaldo/:id',
    loadChildren: () => import('./pages/bayarsaldo/bayarsaldo.module').then( m => m.BayarsaldoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'blogsingle/:id',
    loadChildren: () => import('./pages/blogsingle/blogsingle.module').then( m => m.BlogsinglePageModule)
  },
  {
    path: 'cekoutdigital',
    loadChildren: () => import('./pages/cekoutdigital/cekoutdigital.module').then( m => m.CekoutdigitalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'kategorippob',
    loadChildren: () => import('./pages/kategorippob/kategorippob.module').then( m => m.KategorippobPageModule)
  },
  {
    path: 'ppobtopup/:id',
    loadChildren: () => import('./pages/ppobtopup/ppobtopup.module').then( m => m.PpobtopupPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ppobtagihan/:id',
    loadChildren: () => import('./pages/ppobtagihan/ppobtagihan.module').then( m => m.PpobtagihanPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cekoutppob/:id',
    loadChildren: () => import('./pages/cekoutppob/cekoutppob.module').then( m => m.CekoutppobPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ppoblist',
    loadChildren: () => import('./pages/ppoblist/ppoblist.module').then( m => m.PpoblistPageModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
