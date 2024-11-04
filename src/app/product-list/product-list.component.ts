import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/services/products/products.service";
import {IProducts} from "../shared/interfaces/products.interface";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {

      this.products = data.products

    })
  }

}
