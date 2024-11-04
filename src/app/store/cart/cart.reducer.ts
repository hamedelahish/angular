import {Action, createReducer, on} from "@ngrx/store";

import {IProductDetail} from "../../shared/interfaces/products.interface";
import {addToCart, clearCart, decreaseQuantity, increaseQuantity, removeFromCart} from "./cart.action";

export interface CartState {
  products: { product: IProductDetail, quantity: number }[];
}

const initialState: CartState = {
  products: []
}
const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product, quantity }) => {
    const existingProduct = state.products.find(item => item.product.id === product.id);
    if (existingProduct) {
      return {
        ...state,
        products: state.products.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      };
    } else {
      return {
        ...state,
        products: [...state.products, { product, quantity }]
      };
    }
  }),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    products: state.products.filter(item => item.product.id !== productId)
  })),
  on(clearCart, state => ({
    ...state,
    products: []
  })),
  on(increaseQuantity, (state, { productId }) => ({
    ...state,
    products: state.products.map(item =>
      item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),
  on(decreaseQuantity, (state, { productId }) => ({
    ...state,
    products: state.products.map(item =>
      item.product.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
  }))
)
export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);

}

