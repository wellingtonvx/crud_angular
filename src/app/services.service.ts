import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Product } from "./models/product.model";

import { HttpClient } from "@angular/common/http";

import { EMPTY, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private HTTP: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  //jogando mensagem de erro
  errorHandler(e : any):Observable<any>{
    this.showMessage(`${e.name}`, true);
    return EMPTY;
  }

  //pegando as informações do backend
  create(product: Product): Observable<Product> {
    return this.HTTP.post<Product>(this.baseUrl, product).pipe(
      map( obj => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.HTTP.get<Product[]>(this.baseUrl).pipe(
      map( obj => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.HTTP.get<Product>(url).pipe(
      map( obj => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.HTTP.put<Product>(url, product).pipe(
      map( obj => obj),
      catchError( e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.HTTP.delete<Product>(url).pipe(
      map( obj => obj),
      catchError( e => this.errorHandler(e))
    )
  }
}
