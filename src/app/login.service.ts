import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:50308/api/Auth/login/"

  header = new HttpHeaders({
    'Authorization':'token'+localStorage.getItem('token')
  })

  constructor(private http:HttpClient) { }


  loginuser(body){
    return this.http.post(this.url,body,{headers:this.header})
  }
}
