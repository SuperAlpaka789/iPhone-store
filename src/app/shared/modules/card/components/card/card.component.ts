import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToCartAction } from 'src/app/shared/store/actions/addToCart.action';
import {
  ColorsInterface,
  ProductsInterface,
} from '../../../../types/products.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('product') productProps: ProductsInterface | undefined;

  constructor(private store: Store, private _snackBar: MatSnackBar) {}

  onAddToCartClick(): void {
    this.store.dispatch(
      addToCartAction({
        selectedProduct: this.productProps!,
      })
    );

    this._snackBar.open('Товар добавлен в корзину', 'закрыть', {
      duration: 3000,
    });
  }
}
