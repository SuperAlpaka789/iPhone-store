import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
  addProductQuantityAction,
  removeFromCartAction,
  subtructProductQuantityAction,
} from 'src/app/shared/store/actions/addToCart.action';
import { selectAppState } from 'src/app/shared/store/selectors/app.selector';
import { ProductsInterface } from 'src/app/shared/types/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    private store: Store,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  products$: Observable<ProductsInterface[]> = this.store.pipe(
    select(selectAppState),
    map((prod) => prod.selectedProducts)
  );

  totalprice$: Observable<number> = this.store.pipe(
    select(selectAppState),
    map((prod) => {
      const total = prod.selectedProducts.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0
      );
      return total;
    })
  );

  onAddQuantity(id: string): void {
    this.store.dispatch(addProductQuantityAction({ id }));
  }
  onSubtructQuantity(id: string): void {
    this.store.dispatch(subtructProductQuantityAction({ id }));
  }
  onDeleteFromCart(id: string): void {
    this.store.dispatch(removeFromCartAction({ id }));
    this._snackBar.open('Товар удален из корзины', 'закрыть', {
      duration: 3000,
    });
  }
  onReturn(): void {
    this.router.navigateByUrl('/');
  }
}
