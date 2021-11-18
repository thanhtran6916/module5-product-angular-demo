import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable()
export class CategoryService {
  private readonly URL = `http://localhost:8080/categories`;

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.URL + '/' + id)
  }

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.URL, category);
  }

  edit(category: Category, id): Observable<Category> {
    return this.httpClient.put<Category>(this.URL + '/' + id, category);
  }

  delete(id: number): Observable<Category> {
   return this.httpClient.delete(this.URL + '/' + id);
  }
}
