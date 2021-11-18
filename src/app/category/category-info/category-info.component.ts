import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/categoryService';
import {Subscription} from 'rxjs';
import {Category} from '../../model/category';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css'],
  providers: [CategoryService]
})
export class CategoryInfoComponent implements OnInit {
  private subscription: Subscription;

  category: Category = {};

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = paramMap.get('id');
      this.findById(parseInt(id));
    }, error => {
      this.router.navigate(["**"])
    })
  }

  findById(id: number) {
    this.subscription = this.categoryService.findById(id).subscribe(data => {
      this.category = data;
    }, error => {
      this.router.navigate(['**'])
    })
  }

}
