import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCategoryProductsDto } from '../_models/get-category-products-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "https://localhost:7203/api/Products/"

  constructor(private httpClient: HttpClient) { }

  getCategoryProducts(model: GetCategoryProductsDto){
    return this.httpClient.post(this.baseUrl+"CategoryProducts", model);
  }
}
