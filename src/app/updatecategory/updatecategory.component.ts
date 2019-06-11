import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  id=0;
  cname=""
  cdescription=""
  categoryId=0;
  constructor(private categoryservice:CategoryService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
      this.id=res['id']
  this.getcategoryByid(this.id)
    })
  }

 
  onUpdate(cupdate){
    console.log(cupdate.value);
 var formdata = {...cupdate.value,categoryId:this.id}
    
    this.categoryservice.updatecategory(this.id, formdata ).subscribe(
      res => {console.log(res)
      
      
      }
      
    )
    this.route.navigate(['/category'])
  }

  getcategoryByid(id){
    this.categoryservice.getcategorybyid(id).subscribe(res=>{
     console.log(res)
     this.cname = res['categoryname']
     this.cdescription = res['description']
    })
    
  }

}
  



