import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetProductsService } from 'src/app/shared/services/getProducts.service';
import { addToCartAction } from 'src/app/shared/store/actions/addToCart.action';
import { selectedProductsSelector } from 'src/app/shared/store/selectors/selectors';
import { ProductsInterface } from 'src/app/shared/types/products.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string;
  product$: Observable<ProductsInterface | undefined>;

  responsiveOptions: any[] = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private getProductsService: GetProductsService,
    private store: Store,
    private _snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params['id'];
    this.product$ = this.getProductsService.getProductById(this.id);
  }

  ngOnInit(): void {
    // const store = this.store
    //   .pipe(select(selectedProductsSelector))
    //   .subscribe((el) => {
    //     console.log(el);
    //   });

    // this.store.pipe(select(selectedProductsSelector)).subscribe((el) => {
    //   console.log(el);
    // });

    window.scroll(0, 0);
  }

  onAddToCartButtonClick(product: ProductsInterface): void {
    this.store.dispatch(
      addToCartAction({
        selectedProduct: product,
      })
    );

    this._snackBar.open('Товар добавлен в корзину', 'закрыть', {
      duration: 3000,
    });
  }
}
