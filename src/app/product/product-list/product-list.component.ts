import {Component, Injectable, OnChanges, OnInit} from '@angular/core';
import {ProductService} from '../../service/productService';
import {Subscription} from 'rxjs';
import {Product} from '../../model/product';
import {ProductEditComponent} from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
@Injectable()
export class ProductListComponent implements OnInit {

  subscription: Subscription;

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.subscription = this.productService.findAll().subscribe((data) => {
      this.products = data;
    }, error => console.log(error.message));
  }
}
