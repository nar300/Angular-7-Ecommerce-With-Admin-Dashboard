import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { RegisterService } from '../register.service';
import { Register } from '../Models/Register';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  CategoryList:Category[]=[];
  ProductList:Product[]=[];
  CategoryLength=0;
  ProductLegth=0;
  useLength=0;
  userlist:Register[]=[];
  constructor(
    private categoryservice:CategoryService,
    private productservice:ProductService,
    private userservice:RegisterService
    
    ) { }

  ngOnInit() {
    this.getallcategories()
    this.getallproducts()
    this.getallusers()
    
  }

getallcategories(){
  this.categoryservice.getallCategory().subscribe(res=>{
    this.CategoryList=res
  })
}
 getallproducts(){
   this.productservice.getallProduct().subscribe(res=>{
     this.ProductList=res
   })
 }

 getallusers(){
   this.userservice.GetallUsers().subscribe(res=>{
     this.userlist=res;

   })
 }
}
