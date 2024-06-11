import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListingsComponent },
      { path: 'detail', component: ProductDetailComponent }
    ]
  }
  
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductListingsComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
