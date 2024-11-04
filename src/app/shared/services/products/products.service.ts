import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IProducts} from "../../interfaces/products.interface";

const BASE_URL = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  model = 'products?limit=10'

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<{products: IProducts[]}>(this.getUrl())
  }

  getUrl() {
    return `${BASE_URL}/${this.model}`
  }
}

