import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ServicesService } from "src/app/services.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
