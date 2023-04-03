import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, toArray } from 'rxjs';
import { selectedProductsSelector } from '../store/selectors/selectors';
import { ProductsInterface } from '../types/products.interface';

@Injectable()
export class CanShowConfirmationForm {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    let isProductsLength = false;
    const products$: Observable<ProductsInterface[]> = this.store.pipe(
      select(selectedProductsSelector),
      map((el) => {
        console.log(el.length);

        if (el.length) {
          isProductsLength = true;
        } else {
          isProductsLength = false;
        }

        return el;
      })
    );

    if (isProductsLength) {
      return true;
    } else {
      return false;
    }
  }
}
