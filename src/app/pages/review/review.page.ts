import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { GetapiService } from 'src/app/services/getapi.service';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  public myForm: FormGroup;
  id :any = 0;
  data : any = [];
  inputs : any;
  masukin : any = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getapi: GetapiService,
    private alert: AlertService,
    private postapi: PostapiService,
    private loading: LoadingController,
    private navCtrl: NavController,
    private platform: Platform,
    private formBuilder: FormBuilder
  ){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.myForm = formBuilder.group({
      idproduk: ['', Validators.required],
      komentar: ['', Validators.required],
      nama: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(0,() => {
        this.navCtrl.navigateBack("/tabs/tab3");
    });
  }

  ionViewWillEnter(){
    this.getapi.getReview(this.id).subscribe(data =>{
      if(data['success'] == true){
        this.data = data['data'];
        if(this.data[0]['review'] > 0){
          this.masukin = false;
        }
        console.log(this.data);
      }else{
        this.alert.presentAlert("Server error","terjadi kendala saat mengambil data pesanan");
      }
    });
  }

  async simpan(){
    const loading = await this.loading.create({
      spinner: 'circular',message: 'menyimpan...'
    });
    await loading.present();

    if(this.data[0]["review"] > 0){
      this.postapi.simpanReview(this.id,this.data).subscribe(res=>{
        loading.dismiss();
        if(res['success'] == true){
          this.navCtrl.back();
        }else{
          this.alert.presentAlert("Server Sibuk","Gagal menyimpan alamat, ulangi beberapa saat lagi...");
        }
      });
    }else{
      loading.dismiss();
      this.alert.presentAlert("Lengkapi Formulir","Anda belum memberikan nilai untuk pesanan ini, silahkan berikan nilai Anda berdasarkan jumlah bintang");
    }
  }

  updateNilai(index,nilai){
    this.data[index]["review"] = nilai;
  }
}
