import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';
import { ProductComponent } from './product/product.component';
import {LoginGuard} from './login/login.guard';


const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products/categories/:categoryId' , component:ProductComponent},
  {path: 'products-add-1', component:ProductAddClassicComponent, canActivate : [LoginGuard]},
  {path: 'products-add-2', component:ProductAddReactiveComponent},
  {path: 'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
