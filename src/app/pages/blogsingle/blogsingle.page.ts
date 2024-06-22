import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-blogsingle',
  templateUrl: './blogsingle.page.html',
  styleUrls: ['./blogsingle.page.scss'],
})
export class BlogsinglePage implements OnInit {

  id: any;
  title: any;
  konten: any;
  img: any;
  tgl: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private alert: AlertService,
    private loading: LoadingController,
    private socialSharing: SocialSharing,
    private domSanitizer: DomSanitizer
  ) { }
  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  ionViewWillEnter(){
    this.getData();
  }

  ngOnInit() {
  }

  async getData(){
    const loadings = await this.loading.create({
      message: 'Memuat Produk...',
      spinner: 'crescent'
    });
    await loadings.present();

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getapi.getBlogSingle(this.id).subscribe(data=>{
      loadings.dismiss();
      this.title = data["result"]["judul"];
      this.tgl = data["result"]["tgl"];
      this.img = data["result"]["foto"];
      this.konten = data["result"]["konten"];
    });
  }

}
