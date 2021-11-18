import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/categoryService';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css'],
  providers: [CategoryService]
})
export class CategoryDeleteComponent implements OnInit {
  private subscription: Subscription;

  private category: Category = {};

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = paramMap.get("id");
      this.findById(parseInt(id));
    }, error => {
      this.router.navigate(['/**']);
    })
  }

  findById(id: number) {
    this.subscription = this.categoryService.findById(id).subscribe(data => {
      this.category = data;
    }, error => {
      this.router.navigate(['/**'])
    });
  }


  deleteCategory(id: number) {
    this.subscription = this.categoryService.delete(id).subscribe(data => {

    }, error => {this.router.navigate(['/**'])});
  }
}
