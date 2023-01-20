import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCategoryProductsDto } from '../_models/get-category-products-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = "https://api.monady.tk/Products/"

  constructor(private httpClient: HttpClient) { }

  getCategoryProducts(model: GetCategoryProductsDto){
    return this.httpClient.post(this.baseUrl+"CategoryProducts", model);
  }
}
