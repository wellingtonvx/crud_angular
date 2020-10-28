import { Product } from './../../../models/product.model'
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicesService } from './../../../services.service';




@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name: '',
    price: null
  }


  constructor(private productService : ServicesService, private routes:Router) { }

  ngOnInit(): void {
  }

  createProducts():void{
    this.productService.create(this.product).subscribe( () => {
      
      this.productService.showMessage("Produto Criado!")
      
      this.routes.navigate(['products'])
    })

  }

  cancel():void{
    this.routes.navigate(['products'])
  }

}