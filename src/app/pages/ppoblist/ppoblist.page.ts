import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-ppoblist',
  templateUrl: './ppoblist.page.html',
  styleUrls: ['./ppoblist.page.scss'],
})
export class PpoblistPage implements OnInit {

  page = 1;
  maximumPages: number = 1;
  items = [];

  constructor(
    private getapi: GetapiService,
    private nav: NavController,
    private loading: LoadingController,
    private postapi: PostapiService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    registerLocaleData( id );
  }

  async ionViewWillEnter(){
    this.page = 1;
    this.items = [];

    this.loadUsers();
  }

  loadMore(event) {
    this.page++;
    
    if (this.page > this.maximumPages){
      event.target.complete();
      console.log("data dah habis bosku");
    }else{
      this.loadUsers(event);
    }
  }

  async loadUsers(event?){
    const loadings = await this.loading.create({
      message: 'memuat pesanan...',
      spinner: 'circular'
    });
    if (!event) {
      await loadings.present();
    }

    this.getapi.PPOBLoad(this.page).subscribe(res=>{
      if (!event) {
        loadings.dismiss();
      }
      if (event) {
        event.target.complete();
      }
      if(res['success']){
        this.items = this.items.concat(res['data']);
        this.maximumPages = res['maxPage'];
      }else{
        this.alert.presentToast("terjadi kesalahan saat menghubungi server");
      }
    });
  }

  open(idx){
    this.nav.navigateForward(['/cekoutppob/'+this.items[idx]['invoice']]);
  }

}
