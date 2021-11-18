import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {CategoryListComponent} from '../category/category-list/category-list.component';
import {CategoryInfoComponent} from '../category/category-info/category-info.component';
import {CategoryDeleteComponent} from '../category/category-delete/category-delete.component';
import {CategoryCreateComponent} from '../category/category-create/category-create.component';
import {CategoryEditComponent} from '../category/category-edit/category-edit.component';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-info/:id', component: ProductInfoComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-info/:id', component: CategoryInfoComponent},
  {path: 'category-delete/:id', component: CategoryDeleteComponent},
  {path: 'category-create', component: CategoryCreateComponent},
  {path: 'category-edit/:id', component: CategoryEditComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductRoutingModule {

}
