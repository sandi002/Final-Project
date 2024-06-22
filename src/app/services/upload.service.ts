import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../core/Constants';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url = Constants.apiURL;
 
  constructor(private http: HttpClient) { }

  uploadKonfirmasi(blobData, id, ext) {
    const formData = new FormData();
    formData.append('bukti', blobData, `buktiTransfer.${ext}`);
    formData.append('format', ext);
    console.log(formData);
 
    return this.http.post(this.url+"transaksi/konfirmasipesanan/?id="+id, formData);
  }

  uploadKonfirmasiTopup(blobData, id, ext) {
    const formData = new FormData();
    formData.append('bukti', blobData, `buktiTransfer.${ext}`);
    formData.append('format', ext);
    console.log(formData);
 
    return this.http.post(this.url+"akun/konfirmasitopup/?id="+id, formData);
  }
 
  uploadImageFile(file: File,id) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('gambar', file, `myimage.${ext}`);
 
    return this.http.post(`${this.url}uploadgambar?id=`+id, formData);
  }
}
