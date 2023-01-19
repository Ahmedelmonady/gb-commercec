import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetCategoryProductsDto } from '../_models/get-category-products-dto';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  
  food: any;

  constructor(private productsService: ProductsService, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    
    var foodDto: GetCategoryProductsDto = {
      categoryname: "Fruits",
      sortorder: "None"
    };

    this.getAllFood(foodDto);

  }

  getAllFood(foodDto: GetCategoryProductsDto){
    this.productsService.getCategoryProducts(foodDto).subscribe({
      next: resp => {
        this.food = resp;
        console.log(resp);
      },
      error: err => console.log(err),
    })
  }

  buy(item: any){
    this.toastr.success(`Purchased ${item.name} for $${item.price}`);
  }

}
