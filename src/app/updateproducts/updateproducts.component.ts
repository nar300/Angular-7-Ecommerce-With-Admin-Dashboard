import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Category } from '../Models/Category';
import { ToasthelperService } from '../helper/toasthelper.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  id=0;
  pname="";
  pprice=0;
  pdescription="";
  pstock=0;
  psize="";
  pcolor="";
  pdiscount=0;
  pCategoryId=0;
  categorylist:Category[]=[];
  productId=0;
  constructor(
    private categoryservice:CategoryService,
    private productservice:ProductService,
    private route:Router,
    private router:ActivatedRoute,
    private toasthelperservice:ToasthelperService
    
    
    ) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
      console.log(res['id'])
      this.id = res['id']
      this.getProductById(this.id)
      this.getallCategory()
    })
    
  }
getallCategory(){
  this.categoryservice.getallCategory().subscribe(res=>{
    console.log(res)
    this.categorylist=res
  
  })
}

 getProductById(id){
   this.productservice.getproductbyid(id).subscribe(res=>{
   this.pname=res['name']
   this.pprice=res['price']
   this.pdescription =res['description']
   this.pstock=res['stock']
   this.psize =res['size']
   this.pcolor=res['color']
   this.pdiscount=res['discount']
   
   this.pCategoryId=res['CategoryId']


  
   })
 }


 onSubmit(upproduct){

   var formdata={...upproduct.value,productId:this.id}
   console.log("form data is"+JSON.stringify(formdata))
   this.productservice.updateproduct(this.id,formdata).subscribe(res=>{
     console.log(res)
    
   })
   this.route.navigate(['/product'])
     this.toasthelperservice.showSuccess("Product Updated")
 }


}
