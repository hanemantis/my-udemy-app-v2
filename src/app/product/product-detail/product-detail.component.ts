import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // const produtIdFromRoute = Number(routeParams.get('productId'));

    // this.product = products.find((product) => product.id === produtIdFromRoute);
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!]
    })
  }
}
