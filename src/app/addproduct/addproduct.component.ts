import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/category';
import { Product } from '../product/product';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit{
  constructor(private formBuilder : FormBuilder,private categoryService : CategoryService, private productService: ProductService, private alertifyService: AlertifyService){}
  categories: Category[] = [];
  productAddForm!: FormGroup;
  product!: Product;
  ngOnInit(): void {
    this.productAddForm = this.formBuilder.group({
      id: [7,Validators.required],
      title: ["",Validators.required],
      description: ["",Validators.required],
      price: ["",Validators.required],
      rating: ["",Validators.required],
      stock: ["",Validators.required],
      categoryId: ["",Validators.required],
      image: ["",Validators.required],
    })
    this.categoryService.getCategories().pipe().subscribe(data => {
      this.categories = data;
     })
  }

  onSubmit() {
    console.log(this.productAddForm);
    this.product = Object.assign({},this.productAddForm.value);
    this.productService.addProduct(this.product).pipe().subscribe(data => {
      this.alertifyService.success(data.title + ": added to database");
      this.productAddForm.reset();
    })
  }
}
