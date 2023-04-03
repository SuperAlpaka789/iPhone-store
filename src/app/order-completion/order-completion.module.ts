import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCompletionComponent } from './components/order-completion/order-completion.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CanShowConfirmationForm } from '../shared/canActivate/canShowCompleteionForm.service';

const routes: Routes = [
  {
    path: 'order-completion',
    component: OrderCompletionComponent,
  },
];

@NgModule({
  declarations: [OrderCompletionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],

  providers: [CanShowConfirmationForm],
})
export class OrderCompletionModule {}
