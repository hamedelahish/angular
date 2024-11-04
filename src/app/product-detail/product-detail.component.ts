import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../shared/services/products/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const productId = Number(params['id']);

      console.log('productId',productId);
    })
  }

}
