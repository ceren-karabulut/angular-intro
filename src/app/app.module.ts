import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { from } from 'rxjs';
import { AlertifyService } from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';
import { LoginComponent } from './login/login.component';
import {AccountService} from './services/account.service';
import{LoginGuard} from './login/login.guard'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddClassicComponent,
    ProductAddReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService , AccountService ,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
