import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/categoryService';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [CategoryService]
})
export class CategoryCreateComponent implements OnInit {

  private subscription: Subscription;

  categoryForm =  new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  category: Category = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  saveCategory() {
    this.category = this.categoryForm.value;
    this.subscription = this.categoryService.save(this.category).subscribe((data) => {
      this.category = data;
    }, error => console.log(error.message));
  }
}
