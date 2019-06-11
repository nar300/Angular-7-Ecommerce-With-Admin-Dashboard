import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean =false;
 
  constructor(private router:Router) { }

  ngOnInit() {
   setInterval(()=>{
     this.checkauthentication()
   },
    500
   )
  }

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  clearInterval()
}
checkauthentication(){
  const Token = localStorage.getItem('token')

  if(Token !=undefined ){

   this.isAuthenticated=true;

  }
}


logout(){
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
}

}
