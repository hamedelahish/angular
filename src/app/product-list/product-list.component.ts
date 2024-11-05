import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/services/products/products.service";
import {initializeProductDetail, IProducts} from "../shared/interfaces/products.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = [];
  totalProducts: number | undefined;
  pageSize: number = 10;
  currentPage: number = 0

  constructor(private productsService: ProductsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.searchProducts(searchQuery,this.currentPage,this.pageSize);
      } else {
        this.getAllProducts(this.currentPage,this.pageSize);
      }
    })

  }

  searchProducts(query: string,skip:number,limit:number): void {
    this.productsService.searchProducts(query,skip*limit,limit).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalProducts = response.total
      },
      error: (err) => {
        console.error('Error fetching searched product:', err);
        this.products = []
      }
    })
  }

  getAllProducts(skip: number , limit: number ) {
    this.productsService.getAllProducts(skip*limit,limit).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalProducts=response.total
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

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    const searchQuery = this.route.snapshot.queryParams['search'];
    if (searchQuery) {
      this.searchProducts(searchQuery, this.currentPage, this.pageSize);
    } else {
      this.getAllProducts(this.currentPage, this.pageSize);
    }
  }

  }
