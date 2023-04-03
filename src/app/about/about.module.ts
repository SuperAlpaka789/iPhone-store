import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/modules/material/material.module';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class AboutModule {}
