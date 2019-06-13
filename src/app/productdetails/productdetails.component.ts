import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
 
  id=0;
  Details:Product ={} ;      
  Cart:any[]=[];   
  Cartcount=0;                                                                     
  constructor(
    private router:ActivatedRoute,
    private productservice:ProductService,
    private cookieService: CookieService,
    
    
    ) { }


  ngOnInit() {

    

    let cart = localStorage.getItem('cart')
    let cartlist = JSON.parse(cart)

    if(cartlist !== null){

      this.Cart = cartlist

      this.Cart.forEach(
        item => {

          this.Cartcount += item.quantity 
        }
      )

      


    }else{
      this.Cart = []
    }





    this.router.params.subscribe(res=>{
      this.id=res['id']
      this.getbyid(this.id)
    })
  }

  getbyid(id){
    this.productservice.getproductbyid(id).subscribe(res=>{
      console.log(res)
      this.Details=res
    })
  }

  AddtoCart(product){

        let CartItem = {
          'productId':product.productId,
          'productname':product.name,
          'productprice':product.price,
          'quantity':1

        }

        let duplicate = false;
    this.Cart.forEach( cartitem => duplicate = cartitem.productId === CartItem.productId);

    if(duplicate){

      this.Cart.forEach(
        element =>  { if (element.productId === CartItem.productId ) {
          element.quantity = element.quantity + 1
        }
      }
      )
      this.Cartcount ++

    }else{
      this.Cart.push(CartItem)

      this.Cartcount ++


    }
    localStorage.setItem('cart' , JSON.stringify(this.Cart))

    console.log(duplicate)

      
  }

  
}
