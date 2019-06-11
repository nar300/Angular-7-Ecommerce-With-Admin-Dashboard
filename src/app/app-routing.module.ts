import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { CategoryComponent } from './category/category.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'updatecategory/:id',component:UpdatecategoryComponent},
  {path:'',component:HomeComponent, canActivate :[AuthguardGuard] },
  {path:'product',component:ProductComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'updateproducts/:id',component:UpdateproductsComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
