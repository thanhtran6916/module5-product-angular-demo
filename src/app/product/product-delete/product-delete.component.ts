import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '../../model/product';
import {ProductService} from '../../service/productService';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
  providers: [ProductService]
})
export class ProductDeleteComponent implements OnInit {

  private subscription: Subscription;

  public product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id: string = paramMap.get('id');
      this.getProduct(parseInt(id));
    }, error => {
      console.log(error.message);
    })
  }

  getProduct(id: number) {
    this.subscription = this.productService.findById(id).subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error.message);
    });
  }

  deleteProduct(id) {
    this.subscription = this.productService.deleteProduct(id).subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error.message);
    })
  }

}
