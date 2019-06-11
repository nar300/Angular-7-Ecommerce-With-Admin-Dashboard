import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorylist:Category[]=[];
  isError=false;
  errorMessage="";

  constructor(private categoryservice:CategoryService) { }

  ngOnInit() {
    this.getall()
  }


  onSubmit(category){

    this.categoryservice.addCategory(category.value).subscribe(res=>{
      // console.log(res)
      this.categorylist.push(res)
      this.isError=false
    },
    err=>{
      // console.log(err)
    this.isError=true;
    this.errorMessage=err;
    
    }
    
    
    )

  }

  getall(){
    this.categoryservice.getallCategory().subscribe(
      res=>{
      this.categorylist=res
      this.isError=false;
    },
    err=>{
      // console.log(err)
      this.isError=true;
    this.errorMessage=err;
    }
    )
  }


  categorydelete(id){
    // console.log(id)
    this.categoryservice.deleteCategory(id).subscribe(res=>{
      // console.log(res)
      this.getall()
   this.isError=false;
    },
    err=>{
      // console.log(err)
      this.isError=true;
      this.errorMessage=err;
    
    })

  }
}
