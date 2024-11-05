import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IProductDetail, IProducts} from "../../interfaces/products.interface";

const BASE_URL = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  model = 'products'


  constructor(private http: HttpClient) {
  }

  getAllProducts(skip: number, limit: number) {
    return this.http.get<{products: IProducts[],total:number}>(this.getUrl(skip, limit))
  }

  getDetailProduct(id:number) {
    return this.http.get< IProductDetail>(this.getUrlWithId(id))
  }


  getUrl(skip:number, limit:number) {

    return `${BASE_URL}/${this.model}?skip=${skip}&limit=${limit}`
  }
  getUrlWithId(id:number) {
    return `${BASE_URL}/${this.model}/${id}`
  }
  getUrlSearch(text: string, skip: number, limit: number) {
    return `${BASE_URL}/${this.model}/search?q=${text}&skip=${skip}&limit=${limit}`

  }

  searchProducts(text:string, skip: number, limit: number) {
    return this.http.get<{products: IProducts[],total:number}>(this.getUrlSearch(text, skip, limit))
  }
}

