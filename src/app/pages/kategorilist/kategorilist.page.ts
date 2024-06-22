import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-kategorilist',
  templateUrl: './kategorilist.page.html',
  styleUrls: ['./kategorilist.page.scss'],
})
export class KategorilistPage implements OnInit {
  kategori: any = [];

  constructor(
    private getapi: GetapiService,
    private alert: AlertService,
    private loading: LoadingController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.load(); 
  }

  async load(){
    const loadings = await this.loading.create({
      message: 'Memuat kategori...',
      spinner: 'circular'
    });
    await loadings.present();
    this.getapi.getKategori().subscribe((res)=>{
      loadings.dismiss();
      if(res['success'] == true){
        this.kategori = res['result'];
      }else{
        this.alert.presentToast("gagal memuat kategori");
      }
    });
  }

}
