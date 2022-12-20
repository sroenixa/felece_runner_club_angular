import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService){}
  categories: Category[] = [];
  ngOnInit(): void {
    this.categoryService.getCategories().pipe().subscribe(data => {
      this.categories = data;
    })
  }
}
