import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

const BASE_URL = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  model = 'products?limit=10&skip=10&select=title,price,category,rating'

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.getUrl())
  }

  getUrl() {
    return `${BASE_URL}/'${this.model}'`
  }
}

