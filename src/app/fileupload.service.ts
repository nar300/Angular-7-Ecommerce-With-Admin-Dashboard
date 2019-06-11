import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  url="http://localhost:50308/api/Imageupload"

  constructor(private http:HttpClient) { }


  imageupload(body){
    return this.http.post(this.url,body)
  }

}
