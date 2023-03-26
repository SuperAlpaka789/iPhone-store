import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreStateInterface } from '../state.interface';

export const storeFeatureSelector =
  createFeatureSelector<StoreStateInterface>('appState');

export const selectedProductsSelector = createSelector(
  storeFeatureSelector,
  (appStore: StoreStateInterface) => appStore.selectedProducts
);
