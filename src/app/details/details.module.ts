import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoFlyerModule } from '../shared/modules/info-flyer/info-flyer.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    InfoFlyerModule,
    MaterialModule,
    ButtonModule,
  ],
})
export class DetailsModule {}
