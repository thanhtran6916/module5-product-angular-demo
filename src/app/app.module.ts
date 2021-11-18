import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {ProductRoutingModule} from './product/product-routing.module';
import {RouterModule} from '@angular/router';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryInfoComponent } from './category/category-info/category-info.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductInfoComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    PageNotFoundComponent,
    CategoryListComponent,
    CategoryInfoComponent,
    CategoryDeleteComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProductRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
