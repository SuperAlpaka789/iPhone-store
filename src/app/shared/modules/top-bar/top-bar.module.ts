import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from '../material/material.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [TopBarComponent, SearchBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
