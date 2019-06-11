import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { FileuploadService } from '../fileupload.service';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  catgoryList:Category[]=[];
  productList:Product[]=[];
  imgurl="";
  constructor(
    private storage: AngularFireStorage,
    private productservice:ProductService,private fileuploadservice:FileuploadService,private categoryservice:CategoryService) { }

  ngOnInit() {
    this.categoryservice.getallCategory().subscribe(res=>{
      console.log(res)
      this.catgoryList=res
    })
    this.geAllproducts()
  }


  uploadimage(imagefile:HTMLInputElement){

    const image = imagefile.files[0]
    let filePath = "fileapth"+Date.now
    const fileRef = this.storage.ref(filePath);

    const task = this.storage.upload(filePath, image)

    task.snapshotChanges().pipe(
      finalize(() =>  fileRef.getDownloadURL().subscribe(
        res =>this.imgurl = res
      ) )
   )
  .subscribe()








//     let request = new FormData()

//     request.append("file",image)
// //uploaded
//     this.fileuploadservice.imageupload(request).subscribe(res=>{
//       console.log(res)
//       //response
//       this.imgurl=res['path']
    // })
  }

  // createImgPath(imageurl){
  //   return "http://localhost:50308/Images/ "+imageurl;}

  onSubmit(product){
    // console.log(product.value)
    const formdata ={
      ...product.value,
      
      "imageurl":this.imgurl
    }
    console.log(formdata)

    this.productservice.createProduct(formdata).subscribe(res=>{
      console.log(res)
      this.productList.push(res)
    },
    
    err=>{
      console.log(err)
    
    }
    )
  }

  
  geAllproducts(){
    this.productservice.getallProduct().subscribe(res=>{
      console.log(res)
      this.productList=res
    })
  }


  productdelete(id){
    this.productservice.deleteproducts(id).subscribe(res=>{
      console.log(res)
      this.geAllproducts()
    })
  }
}
