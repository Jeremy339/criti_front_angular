import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseUrl = environment.urlServidor
  private http = inject(HttpClient)

  funListar() {
    return this.http.get(`${this.baseUrl}/libro/back`)
  }
  funGuardar(registro:any){
    return this.http.post(`${this.baseUrl}/libro/back`, registro)
  }
}