import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/productService';
import { Subscription } from 'rxjs';
import {CategoryService} from '../../service/categoryService';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [ProductService, CategoryService]
})
export class ProductCreateComponent implements OnInit {

  private subscription: Subscription;

  product: Product;

  contactForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl()
  })

  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.findAllCategory();
  }

  createProduct() {
    this.product = {
      name: this.contactForm.value.name,
      price: this.contactForm.value.price,
      description: this. contactForm.value.description,
      category: {
        id: this.contactForm.value.category
      }
    };
    this.subscription = this.productService.saveProduct(this.product).subscribe((data) => {
      this.product = data;
    }, error => console.log(error.message));
  }

  findAllCategory() {
    this.categoryService.findAll().subscribe((data) => {
      this.categories = data;
    }, error => error.message);
  }
}
