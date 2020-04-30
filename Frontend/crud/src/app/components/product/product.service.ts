import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ShowMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  readById(id: string): Observable<Product> {
    const url = '${this.baseUrl}/${id}';
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = '${this.baseUrl}/${product.id}';
    return this.http.put<Product>(url, product);
  }
}
