import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Buy } from './buy.model';
import { Observable, EMPTY  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuyService {

  baseUrl = "http://localhost:3001/buy"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  createBuy(buy: Buy): Observable<Buy>{
    return this.http.post<Buy>(this.baseUrl, buy)
  }
  


  readBuy(): Observable<Buy[]> {
    return this.http.get<Buy[]>(this.baseUrl)
  }


  

  readById(id: string) : Observable<Buy> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Buy>(url)
  }


  update(buy: Buy): Observable<Buy> {
    const url = `${this.baseUrl}/${buy.id}`
    return this.http.put<Buy>(url, buy)
  }
  
  delete(id: number): Observable<Buy> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Buy>(url)
  }


 
 
}
