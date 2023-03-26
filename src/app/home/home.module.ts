import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from '../shared/modules/card/card.module';
import { RouterModule, Routes } from '@angular/router';
import { GetProductsService } from '../shared/services/getProducts.service';
import { SkeletonCardModule } from '../shared/modules/skeleton-card/skeleton-card.module';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    SkeletonCardModule,
    NgxPaginationModule
  ],
  exports: [HomeComponent],
  providers: [GetProductsService],
})
export class HomeModule {}
