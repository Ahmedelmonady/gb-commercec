import { Component, OnInit } from '@angular/core';
import { CategoryResponse } from './_models/category-response';
import { NewCategoryDto } from './_models/new-category-dto';
import { CategoriesService } from './_services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-client';
  categories : any;
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(): void {
    var newCategory: NewCategoryDto = {
      name: "Vehiclezs",
      codename: "VCHX"
    }
  }

  addNewCategory(newCategory: NewCategoryDto){
    this.categoriesService.addNewCategory(newCategory).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getAllCategories(){
    this.categoriesService.getAllCategories().subscribe(
      {
        next: response => {
          this.categories = response;
          console.log(response);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
