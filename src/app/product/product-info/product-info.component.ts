import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/productService';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers: [ProductService]
})
export class ProductInfoComponent implements OnInit {

  subscription: Subscription;

  product = {};

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id: string = paramMap.get('id');
      this.infoProduct(parseInt(id));
    }, error => {
      console.log(error.message);
    })
  }

  infoProduct(id: number) {
    this.subscription = this.productService.findById(id).subscribe(data => {
      this.product = data;
    }, error => {
      this.router.navigate(['**']);
      console.log(error.message);
    })
  }

}
