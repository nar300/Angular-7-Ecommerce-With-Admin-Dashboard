import { Component, OnInit } from '@angular/core';
import { Register } from '../Models/Register';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';
import { ToasthelperService } from '../helper/toasthelper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userList:Register[]=[];
  isError=false;
  errorMessage="";

  constructor(
    private registerservice:RegisterService,
    private router:Router,
    private toasthelperservice:ToasthelperService,

    
    
    ) { }

  ngOnInit() {

this.GetUsers()
  }


  GetUsers(){
    this.registerservice.GetallUsers().subscribe(res=>{
      this.userList=res;
    })
  }

  onSubmit(register){
    this.registerservice.registerUser(register.value).subscribe(res=>{
      console.log(res)
      this.userList.push(res)
      // this.isError=false;
      this.toasthelperservice.showSuccess("Successfully registered")
      this.router.navigate(['/'])

     
    },
    err=>{
      // this.isError=true;
      // this.errorMessage=err;
      this.toasthelperservice.showError(err.toString())
    }
    )

  }
}
