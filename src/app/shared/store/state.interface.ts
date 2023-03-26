import { ProductsInterface } from '../types/products.interface';

export interface StoreStateInterface {
  selectedProducts: ProductsInterface[];
}

export interface CartProductInterface {
  count: number;
  product: ProductsInterface | null;
}
