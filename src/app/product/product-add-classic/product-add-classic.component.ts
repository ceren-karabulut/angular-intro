import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers:[CategoryService , ProductService]
})
export class ProductAddClassicComponent implements OnInit {

  constructor(private categoryService : CategoryService, private productService:ProductService,
    private alertifService:AlertifyService) { }

  model : Product = new Product();
  categories : Category[];
  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(data=>{
      this.categories = data;
    })
  }

  add(form : NgForm){
    this.productService.addProduct(this.model)
    .subscribe(data=>{
      this.alertifService.success(data.name + "added succesfull!")
    })

  }
}
