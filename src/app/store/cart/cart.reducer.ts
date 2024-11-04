import {Action, createReducer, on} from "@ngrx/store";

import {IProductDetail} from "../../shared/interfaces/products.interface";
import {addToCart, clearCart, removeFromCart} from "./cart.action";

export interface CartState {
  products: { product: IProductDetail, quantity: number }[];
}

const initialState: CartState = {
  products: []
}
const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {product, quantity}) => ({
    ...state,
    products: [...state.products, {product, quantity}]

  })),
  on(removeFromCart, (state, {productId}) => ({
    ...state,
    products: state.products.filter(item => item.product.id !== productId)
  })),
  on(clearCart, state => ({
    ...state,
    products: []
  }))
)

export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);

}

