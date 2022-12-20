import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService : AlertifyService, private productService: ProductService, private route : ActivatedRoute){}

  searchText!: string;
  products: Product[] = [];

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.productService.getProducts(params["categoryId"]).pipe().subscribe(data => {
          this.products = data;
        })
      })
      
  }

  addToCart(id:number): void {
    this.alertifyService.error("Tıklandı");
  }
}
