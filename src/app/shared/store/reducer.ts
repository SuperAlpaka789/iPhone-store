import { Action, createReducer, on } from '@ngrx/store';
import {
  addProductQuantityAction,
  addToCartAction,
  hydrateStoreAction,
  removeFromCartAction,
  subtructProductQuantityAction,
} from './actions/addToCart.action';
import { StoreStateInterface } from './state.interface';

const initialState: StoreStateInterface = {
  selectedProducts: [],
};

const updateLocalStorage = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const addToCartReducer = createReducer(
  initialState,
  on(addToCartAction, (state, action): StoreStateInterface => {
    const isAdded = state.selectedProducts.some(
      (item) => item.id === action.selectedProduct.id
    );
    if (!isAdded) {
      const updatedProduct = { ...action.selectedProduct, count: 1 };

      updateLocalStorage('selectedProducts', [
        ...state.selectedProducts,
        updatedProduct,
      ]);
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, updatedProduct],
      };
    } else {
      const updatedState = state.selectedProducts.map((item) => {
        if (item.id === action.selectedProduct.id) {
          const updatedCount = item.count! + 1;
          const updatedProduct = {
            ...action.selectedProduct,
            count: updatedCount,
          };

          return updatedProduct;
        }

        return item;
      });

      updateLocalStorage('selectedProducts', [...updatedState]);
      return {
        ...state,
        selectedProducts: [...updatedState],
      };
    }
  }),

  on(addProductQuantityAction, (state, action): StoreStateInterface => {
    const updatedState = state.selectedProducts.map((product) => {
      if (product.id === action.id) {
        const updatedCount = product.count + 1;
        const updatedProduct = { ...product, count: updatedCount };

        return updatedProduct;
      }

      return product;
    });

    updateLocalStorage('selectedProducts', [...updatedState]);
    return {
      ...state,
      selectedProducts: [...updatedState],
    };
  }),

  on(subtructProductQuantityAction, (state, action): StoreStateInterface => {
    const updatedState = state.selectedProducts.map((product) => {
      if (product.id === action.id) {
        const updatedCount = product.count - 1;
        const updatedProduct = { ...product, count: updatedCount };

        return updatedProduct;
      }

      return product;
    });

    const filteredByCount = updatedState.filter((product) => product.count > 0);

    updateLocalStorage('selectedProducts', [...filteredByCount]);
    return {
      ...state,
      selectedProducts: [...filteredByCount],
    };
  }),

  on(removeFromCartAction, (state, action): StoreStateInterface => {
    const updatedState = state.selectedProducts.filter(
      (product) => product.id !== action.id
    );

    updateLocalStorage('selectedProducts', [...updatedState]);
    return {
      ...state,
      selectedProducts: [...updatedState],
    };
  }),

  on(hydrateStoreAction, (state, action): StoreStateInterface => {
    const updatedState = action.selectedProducts;

    return {
      ...state,
      selectedProducts: [...updatedState],
    };
  })
);
