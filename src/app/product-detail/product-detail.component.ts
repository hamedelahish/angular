import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../shared/services/products/products.service";
import {initializeProductDetail, IProductDetail} from "../shared/interfaces/products.interface";
import { addToCart } from '../store/cart/cart.action';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetail: IProductDetail = initializeProductDetail();
  quantity: number = 1

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private store:Store

  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);

      this.productService.getDetailProduct(productId).subscribe({
        next: (response) => {
          this.productDetail = response;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
          this.productDetail = initializeProductDetail();
        }
      })
    });

  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: IProductDetail) {
    console.log('quantity',this.quantity)
    this.store.dispatch(addToCart({ product, quantity: this.quantity }));
  }
}
