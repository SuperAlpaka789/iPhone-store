import { ProductsInterface } from '../../types/products.interface';

export interface StoreProductsInterface
  extends Omit<ProductsInterface, 'color'> {
  color: string;
}
