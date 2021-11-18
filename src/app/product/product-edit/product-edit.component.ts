import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/productService';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from '../../service/categoryService';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [ProductService, CategoryService]
})
export class ProductEditComponent implements OnInit {

  private subscription: Subscription;

  product: Product;

  contactForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl()
  })

  category: Category;

  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = paramMap.get('id');
      this.findById(parseInt(id));
    })
    this.categoryService.findAll().subscribe((data) => {
      this.categories = data;
    });
  }

  findById(id) {
    this.subscription = this.productService.findById(id).subscribe(data => {
      this.product = data;
      this.category = this.product.category;
      this.contactForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        category: new FormControl(this.category.name),
        description: new FormControl(this.product.description)
      })
    }, error => {
      console.log(error.message);
    })
  }

  editProduct() {
    this.product = this.contactForm.value;
    this.subscription = this.productService.saveProduct(this.product).subscribe((data) => {
      this.product = data;
    }, error => {
      console.log(error.message);
    })
  }
}
