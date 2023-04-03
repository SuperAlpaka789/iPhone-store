import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'delivery-info',
    component: DeliveryInfoComponent,
  },
];

@NgModule({
  declarations: [DeliveryInfoComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class DeliveryInfoModule {}
