import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoFlyerComponent } from './components/info-flyer/info-flyer.component';

@NgModule({
  declarations: [InfoFlyerComponent],
  imports: [CommonModule],
  exports: [InfoFlyerComponent],
})
export class InfoFlyerModule {}
