import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonCardComponent } from './components/skeleton-card/skeleton-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [SkeletonCardComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [SkeletonCardComponent],
})
export class SkeletonCardModule {}
