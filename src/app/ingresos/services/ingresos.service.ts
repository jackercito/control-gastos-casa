import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';

import { Ingresos } from './../models/ingresos.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getIngresos$(): Observable<Ingresos[]> {
    return this.http
      .get<Ingresos[]>(`${environment.API_URL}/api/ingreso`)
  }

  setIngresos$(registro: Ingresos): Observable<any> {
    return this.http
      .post<any>(`${environment.API_URL}/api/ingreso`, registro)
  }

  getIngreso$(id): Observable<Ingresos> {
    return this.http.get<Ingresos>(`${environment.API_URL}/api/ingreso/${id}`)
  }

  putIngresos$(registro: Ingresos): Observable<Ingresos> {
    return this.http.put<Ingresos>(`${environment.API_URL}/api/ingreso/${registro._id}`, registro)
  }

  deleteIngresos$(registro: Ingresos): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/api/ingreso/${registro._id}`)
  }
}
