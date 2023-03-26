import { createAction, props } from '@ngrx/store';
import { ProductsInterface } from '../../types/products.interface';
import { ActionTypes } from '../ActionTypes';

export const addToCartAction = createAction(
  ActionTypes.ADD_PRODUCT_TO_CART,
  props<{ selectedProduct: ProductsInterface }>()
);

export const addProductQuantityAction = createAction(
  ActionTypes.ADD_PRODUCT_QUANTITY,
  props<{ id: string }>()
);

export const subtructProductQuantityAction = createAction(
  ActionTypes.SUBTRUCT_PRODUCT_QUANTITY,
  props<{ id: string }>()
);

export const removeFromCartAction = createAction(
  ActionTypes.REMOVE_PRODUCT_FROM_CART,
  props<{ id: string }>()
);
