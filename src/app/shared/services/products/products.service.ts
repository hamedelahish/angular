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

  getAllProducts() {
    return this.http.get<{products: IProducts[]}>(this.getUrl())
  }

  getDetailProduct(id:number) {
    return this.http.get< IProductDetail>(this.getUrlWithId(id))
  }


  getUrl() {
    //TODO: موقت جهت عدم دریافت کل اطلاعات ، پجینیشن اضافه خواهد شد
    return `${BASE_URL}/${this.model}?limit=10`
  }
  getUrlWithId(id:number) {
    return `${BASE_URL}/${this.model}/${id}`
  }
  getUrlSearch(text:string) {
    return `${BASE_URL}/${this.model}/search?q=${text}`

  }

  searchProducts(text:string) {
    return this.http.get<{products: IProducts[]}>(this.getUrlSearch(text))
  }
}

