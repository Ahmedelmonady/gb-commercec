import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from '../_models/category-response';
import { NewCategoryDto } from '../_models/new-category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = "https://localhost:7203/api/Categories/"

  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
    return this.httpClient.get<CategoryResponse>(this.baseUrl + "All");
  }

  addNewCategory(newCategoryDto: NewCategoryDto){
    return this.httpClient.post(this.baseUrl + "New", newCategoryDto);
  }


}
