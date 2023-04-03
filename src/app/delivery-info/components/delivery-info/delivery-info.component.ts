import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent {
  conditionOfPaymentsOpenState = false;
  guaranteesOfPaymentsOpenState = false;
  termOfPaymentsOpenState = false;
}
