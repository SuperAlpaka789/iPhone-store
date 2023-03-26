import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
