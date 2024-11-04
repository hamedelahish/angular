import {createAction,props} from "@ngrx/store";
import {IProductDetail} from "../../shared/interfaces/products.interface";
export const addToCart=createAction('add to cart',
  props<{product:IProductDetail,quantity:number}>()
  )
export const removeFromCart=createAction(
  'remove from cart',
  props<{productId:number}>()
)

export const increaseQuantity = createAction(
  'increase quantity',
  props<{ productId: number }>()
);

export const decreaseQuantity = createAction(
  'decrease quantity',
  props<{ productId: number }>()
);


export const clearCart=createAction('clear cart');


