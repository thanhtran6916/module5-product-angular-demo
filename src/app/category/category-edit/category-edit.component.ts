import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/categoryService';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [CategoryService]
})
export class CategoryEditComponent implements OnInit {
  private subscription: Subscription;

  categoryForm: FormGroup;

  category: Category = {};

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = paramMap.get('id');
      this.findById(id);
    }, error => console.log(error.message));
  }

  findById(id) {
    this.subscription = this.categoryService.findById(id).subscribe((data) => {
      this.category = data;
      this.categoryForm = new FormGroup({
        id: new FormControl(this.category.id),
        name: new FormControl(this.category.name)
      })
    }, error => {
      this.router.navigate(['/**']);
    })
  }

  editCategory(id: number) {
    this.category = this.categoryForm.value;
    this.subscription = this.categoryService.edit(this.category, id).subscribe((data) => {
      this.category = data;
    }, error => {
      this.router.navigate(['/**']);
    });
  }
}
