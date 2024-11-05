import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/services/products/products.service";
import {initializeProductDetail, IProducts} from "../shared/interfaces/products.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private productsService: ProductsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.searchProducts(searchQuery);
      } else {
        this.getAllProducts();
      }
    })

  }

  searchProducts(query: string): void {
    this.productsService.searchProducts(query).subscribe({
      next: (response) => {
        this.products = response.products;
      },
      error: (err) => {
        console.error('Error fetching searched product:', err);
        this.products = []
      }
    })
  }

  getAllProducts() {
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
