import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../shared/modules/material/material.module';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class CartModule {}
