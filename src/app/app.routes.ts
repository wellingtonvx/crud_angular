import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductCreateComponent } from "./components/products/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/products/product-delete/product-delete.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class Routing {}
