import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  filter,
  find,
  from,
  map,
  Observable,
  retry,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProductsInterface } from '../types/products.interface';

@Injectable()
export class GetProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductsInterface[]> {
    const url = environment.apiUrl + '/angular-products';
    // const url = environment.apiUrl + '/appleProducts';

    return this.http.get<ProductsInterface[]>(url).pipe(retry(1));
  }

  getProductById(id: string): Observable<ProductsInterface | undefined> {
    const url = environment.apiUrl + '/angular-products';
    // const url = environment.apiUrl + '/appleProducts';

    return this.getAllProducts().pipe(
      map((productList: ProductsInterface[]) => {
        const foundProduct = productList.find(
          (product: ProductsInterface) => product.id === id
        );

        return foundProduct;
      })
    );
  }
}
