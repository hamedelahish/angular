import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProductDetail } from '../shared/interfaces/products.interface';
import {selectCartProducts} from "../store/cart/cart.selectors";
import {decreaseQuantity, increaseQuantity} from "../store/cart/cart.action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: { product: IProductDetail, quantity: number }[] = [];
  displayedColumns: string[] = ['thumbnail', 'title', 'quantity', 'price', 'total'];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectCartProducts).subscribe(products => {
      this.cartProducts = products;
    });
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(increaseQuantity({ productId }));
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(decreaseQuantity({ productId }));
  }

  calculateTotal(): number {
    return this.cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
