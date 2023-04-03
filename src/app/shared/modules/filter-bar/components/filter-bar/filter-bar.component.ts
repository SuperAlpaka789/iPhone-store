import { Component, EventEmitter, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetProductsService } from 'src/app/shared/services/getProducts.service';
import { ProductsInterface } from 'src/app/shared/types/products.interface';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  @Output() filterParams = new EventEmitter<Array<string>>();

  appliedFilters: Array<string> = [];

  constructor(private getProductsService: GetProductsService) {}

  products$: Observable<ProductsInterface[]> = this.getProductsService
    .getAllProducts()
    .pipe(
      map((products) => {
        const uniqueModels = [
          ...new Map(
            products.map((item: ProductsInterface) => [item.model, item])
          ).values(),
        ];

        return uniqueModels;
      })
    );

  onApplyFilters(): void {
    this.filterParams?.emit(this.appliedFilters);
  }
  onFilterChange(filterName: string): void {
    if (this.appliedFilters.includes(filterName)) {
      this.appliedFilters = this.appliedFilters.filter(
        (item) => item !== filterName
      );
    } else {
      this.appliedFilters.push(filterName);
    }
  }
}
