import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Observable, EMPTY  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 

  baseUrl = "http://localhost:3001/cliente"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }
  
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }

  readById(id: string) : Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
  

}
