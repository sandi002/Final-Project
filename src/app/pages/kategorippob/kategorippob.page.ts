import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-kategorippob',
  templateUrl: './kategorippob.page.html',
  styleUrls: ['./kategorippob.page.scss'],
})
export class KategorippobPage implements OnInit {
  kategoritop: any = [];
  kategoritag: any = [];

  constructor(
    private getapi: GetapiService,
    private alert: AlertService,
    private loading: LoadingController
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
        this.kategoritop = res['ppobtop'];
        this.kategoritag = res['ppobtag'];
      }else{
        this.alert.presentToast("gagal memuat kategori");
      }
    });
  }

}
