import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable()
export class ProductService {
  private readonly URL = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.URL, product)
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.URL + '/' + id);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.URL + '/' + id);
  }
}
