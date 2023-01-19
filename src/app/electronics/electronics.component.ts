import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetCategoryProductsDto } from '../_models/get-category-products-dto';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  
  electronics: any;

  constructor(private productsService: ProductsService, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    var electronicsDto: GetCategoryProductsDto = {
      categoryname: "Electronics",
      sortorder: "None"
    };

    this.getAllElectronics(electronicsDto);
  }

  getAllElectronics(electronicsDto: GetCategoryProductsDto){
    this.productsService.getCategoryProducts(electronicsDto).subscribe({
      next: resp => {
        this.electronics = resp;
        console.log(resp);
      },
      error: err => console.log(err),
    })
  }

  buy(item: any){
    this.toastr.success(`Purchased ${item.name} for $${item.price}`);
  }
}
