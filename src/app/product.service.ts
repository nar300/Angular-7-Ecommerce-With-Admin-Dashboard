import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:50308/api/Products/"

 token = localStorage.getItem('token')

  constructor(private http:HttpClient) { }

   header= new HttpHeaders({
    'Authorization':'Bearer '+ this.token
  })

createProduct(body){
  return this.http.post<Product>(this.url,body)
}

getallProduct(){
  return this.http.get<Product[]>(this.url,{headers:this.header})
}

getproductbyid(id){
  return this.http.get<Product>(this.url+id)
}

updateproduct(id,body){
  return this.http.put(this.url+id+"/", body,{headers:this.header})
}


deleteproducts(id){
  return this.http.delete(this.url+id,{headers:this.header})
}

}
