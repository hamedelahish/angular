import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/services/products/products.service";
import {initializeProductDetail, IProducts} from "../shared/interfaces/products.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.products;
      },
      error: (err) => {
        console.error('Error fetching product:', err);
        this.products = []
      }
    })

  }

  showDetail(productId: number) {
    this.router.navigate(['/dashboard/product', productId])
  }
}
