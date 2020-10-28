import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ServicesService } from "src/app/services.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ServicesService,
    private routes: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProducts(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.routes.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.routes.navigate(["/products"]);
  }
}
