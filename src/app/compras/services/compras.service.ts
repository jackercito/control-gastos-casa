import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';

import { Compras } from './../models/compras.model'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getCompras$(): Observable<Compras[]> {
    return this.http
      .get<Compras[]>(`${environment.API_URL}/api/compra`)
  }

  setCompras$(registro: Compras): Observable<any> {
    return this.http
      .post<any>(`${environment.API_URL}/api/compra`, registro)
  }

  getCompra$(id): Observable<Compras> {
    return this.http.get<Compras>(`${environment.API_URL}/api/compra/${id}`)
  }

  putCompras$(registro: Compras): Observable<Compras> {
    return this.http.put<Compras>(`${environment.API_URL}/api/compra/${registro._id}`, registro)
  }

  deleteCompras$(registro: Compras): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/api/compra/${registro._id}`)
  }
}
