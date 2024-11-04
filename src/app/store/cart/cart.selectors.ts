import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartCount = createSelector(
  selectCartState,
  (state: CartState) => state.products.length
);
export const selectCartProducts = createSelector(
  selectCartState,
  (state: CartState) => state.products
);
