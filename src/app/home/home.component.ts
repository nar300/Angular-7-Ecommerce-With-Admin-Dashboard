import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filteredList:Product[]=[];

  p: number = 1;

  productList:Product[]=[];
  Cart: any[]=[];

  CategoryList:Category[]=[];
  constructor(private productservice:ProductService,private categoryservice:CategoryService) { }

  ngOnInit() {
    this.getallproducts()
    this.getallCategory()
  }

  getallCategory(){
    this.categoryservice.getallCategory().subscribe(res=>{
      console.log(res)
      this.CategoryList=res
    })
  }
  getallproducts(){
    this.productservice.getallProduct().subscribe(res=>{
      console.log(res)
      this.filteredList=this.productList=res
    },
    err=>{
      console.log(err)
    
    })
  }

  


  filterbyCategory(id){
    console.log(id)
   this.filteredList=  this.productList.filter(item=>item.CategoryId === id)

  }

 search(sear1){
  this.filteredList=  this.productList.filter(
      item=>item.name.toLowerCase().includes(sear1.value)
    )
    
  }

 
}
