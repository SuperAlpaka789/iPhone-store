import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [FilterBarComponent],
})
export class FilterBarModule {}
