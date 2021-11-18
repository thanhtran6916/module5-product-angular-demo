import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/categoryService';
import {Category} from '../../model/category';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  subscription: Subscription

  categories: Category[] = [];

  category: Category = {};

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.findAll();
  }



  findAll() {
    this.subscription = this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    }, error => {
      this.router.navigate(['**']);
    })
  }

}
