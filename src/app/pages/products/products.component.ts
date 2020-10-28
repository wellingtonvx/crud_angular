import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private headerService : HeaderService, private routes : Router) { 
    headerService.headerData = {
      title: "cadastro de produtos",
      icon: 'storefront',
      routeUrl:"/products"
    }
  }
  
  ngOnInit(): void {
  }

  navigateToProductCreate() : void {
      this.routes.navigate(['products/create'])
   }
   

}
