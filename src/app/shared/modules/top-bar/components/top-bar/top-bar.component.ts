import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, scan, tap } from 'rxjs';
import { selectedProductsSelector } from 'src/app/shared/store/selectors/selectors';
import { ProductsInterface } from 'src/app/shared/types/products.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  showBurgerDropdown: boolean = false;
  totalProductsCount$: Observable<number> = this.store.pipe(
    select(selectedProductsSelector),
    map((item) => {
      const totalAmount = item.reduce((acc, curr) => acc + curr.count, 0);
      return totalAmount;
    })
  );

  constructor(private store: Store) {}
}
