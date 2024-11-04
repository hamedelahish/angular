import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../shared/services/products/products.service";
import {initializeProductDetail, IProductDetail, IProducts} from "../shared/interfaces/products.interface";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetail: IProductDetail = initializeProductDetail();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = Number(params['id']);

      this.productService.getDetailProduct(productId).subscribe({
        next: (response) => {
          this.productDetail = response;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
          this.productDetail = initializeProductDetail();
        }
      })
    });
  }
}
