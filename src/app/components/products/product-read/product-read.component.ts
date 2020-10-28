import { ServicesService } from './../../../services.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productServices : ServicesService) { }

  ngOnInit(): void {
    this.productServices.read().subscribe( product => {
      this.products = product
    })
  }

}
