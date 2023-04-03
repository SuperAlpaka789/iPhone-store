import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { ProductsInterface } from 'src/app/shared/types/products.interface';
import { selectedProductsSelector } from '../../../shared/store/selectors/selectors';
import { DOCUMENT } from '@angular/common';
import { selectAppState } from 'src/app/shared/store/selectors/app.selector';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-order-completion',
  templateUrl: './order-completion.component.html',
  styleUrls: ['./order-completion.component.scss'],
})
export class OrderCompletionComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Inject(DOCUMENT) private document: Document
  ) {}

  totalprice$: Observable<number> = this.store.pipe(
    select(selectedProductsSelector),
    map((prod: ProductsInterface[]) => {
      const total = prod.reduce(
        (acc, curr) => acc + curr.count * curr.price,
        0
      );
      return total;
    })
  );

  products$: Observable<ProductsInterface[] | undefined> = this.store.pipe(
    select(selectedProductsSelector)
  );
  form = this.fb.group({
    country: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', [Validators.required, Validators.minLength(3)]],
    appartment: ['', Validators.required],
    postCode: ['', Validators.required],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        // Validators.pattern(/^[^\s\p{IsCyrillic}A-Za-z]+$/),
      ],
    ],
    surename: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        // Validators.pattern(/^[a-zA-Z]+$/),
      ],
    ],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d+$/)]],
    email: ['', [Validators.required, Validators.email]],
    paymentMethod: ['', Validators.required],
  });

  isPaymentCompleted: boolean = false;
  onSubmit(): void {
    const paymentMethod = this.form.value.paymentMethod;
    switch (paymentMethod) {
      case 'qiwi':
        this.document.location.href = environment.qiwiUrl;
        this.isPaymentCompleted = true;
        break;
      case 'card':
        this.document.location.href = environment.cardUrl;
        this.isPaymentCompleted = true;
        break;
      case 'payeer':
        this.document.location.href = environment.payeerUrl;
        this.isPaymentCompleted = true;
        break;
      case 'webmoney':
        this.document.location.href = environment.webmoneyUrl;
        this.isPaymentCompleted = true;
        break;
      case 'perfect_money':
        this.document.location.href = environment.perfectMoneyUrl;
        this.isPaymentCompleted = true;
        break;

      default:
        break;
    }

    localStorage.clear();
  }
}
