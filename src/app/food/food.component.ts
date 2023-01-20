import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetCategoryProductsDto } from '../_models/get-category-products-dto';
import { SortOrder } from '../_models/sort-order-enum';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  
  food: any;

  isEmpty: boolean = true;

  emptyErrorMessage: any;

  clickedBtn: string = "fruits";

  switchClick = true;

  sortingOrder = [
    SortOrder.Ascending,
    SortOrder.Descending,
    SortOrder.LowToHigh,
    SortOrder.HighToLow,
  ];

  foodDto: GetCategoryProductsDto = {
    categoryname: "Fruits",
    sortorder: "None"
  };

  constructor(private productsService: ProductsService, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    var data = this.foodDto
    this.getAllFood(data);

    console.log(this.sortingOrder[0]);
  }

  getFoodList(categoryName: string, clickName: string){
    if(this.clickedBtn !== clickName){
      this.clickedBtn = clickName;
      this.foodDto.categoryname = categoryName;
      this.foodDto.sortorder = "None";
      this.switchClick = !this.switchClick;
      this.getAllFood(this.foodDto);
    }
  }

  getAllFood(foodDto: GetCategoryProductsDto){
    this.productsService.getCategoryProducts(foodDto).subscribe({
      next: resp => {
        this.food = resp;
        console.log(resp);
        this.isEmpty = false;
      },
      error: err => {
        console.log(err);
        this.isEmpty = true;
        if(err.status == 400) this.emptyErrorMessage = err.error;
      },
    })
  }

  buy(item: any){
    this.toastr.success(`Purchased ${item.name} for $${item.price}`);
  }

  sortOrder(sortOrder: string){
    this.foodDto.sortorder = sortOrder;
    this.getAllFood(this.foodDto);
  }

}
