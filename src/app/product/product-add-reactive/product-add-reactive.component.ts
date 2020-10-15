import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-reactive',
  templateUrl: './product-add-reactive.component.html',
  styleUrls: ['./product-add-reactive.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder , private categoryService:CategoryService
    ,private productService:ProductService ,private alertifyService:AlertifyService) { }

  productAddForm : FormGroup //#name
  product:Product = new Product();
  categories:Category[];

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name: ["",Validators.required],
      brand:["",Validators.required],
      price:["",Validators.required],
      imgUrl:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({},this.productAddForm.value) //assined to object
    }

    this.productService.addProduct(this.product)
    .subscribe(data=>{
      this.alertifyService.success(data.name + " " + "added successful")
    });
  }
}
