import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GetProductsService } from 'src/app/shared/services/getProducts.service';
import { ProductsInterface } from 'src/app/shared/types/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private getProductsService: GetProductsService) {}

  allProducts: ProductsInterface[] | null = null;
  productSubscription: Subscription | undefined;

  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.productSubscription = this.getProductsService
      .getAllProducts()
      .subscribe((response) => {
        this.allProducts = response;
      });
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
  onTableDataChange(event: any) {
    this.allProducts = null;
    this.page = event;
    this.fetchData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchData();
  }
}
