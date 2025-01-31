import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private baseUrl: string = "http://localhost:3000/craete-product"


  constructor(private snackBar: MatSnackBar,  private http:HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"  
    })
  } 

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
