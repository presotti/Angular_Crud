import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ShowMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    this.ShowMessage('Ocorreu um erro', true);
    return EMPTY;
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map ((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe(
      map ((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      map ((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map ((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map ((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
