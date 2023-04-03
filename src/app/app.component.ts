import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersistanceService } from './shared/services/persistance.service';
import { hydrateStoreAction } from './shared/store/actions/addToCart.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'generic_store';
  constructor(
    private persistanceService: PersistanceService,
    private store: Store
  ) {}

  ngOnInit(): void {
    const dataFromLocalStorage =
      this.persistanceService.get('selectedProducts');

    if (dataFromLocalStorage) {
      this.store.dispatch(
        hydrateStoreAction({ selectedProducts: dataFromLocalStorage })
      );
    }
  }
}
