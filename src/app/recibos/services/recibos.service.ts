import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';

import { Recibos } from './../models/recibos.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {
  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getRecibos$(): Observable<Recibos[]> {
    return this.http.get<Recibos[]>(`${environment.API_URL}/api/recibo`)
  }

  getRecibo$(id): Observable<Recibos> {
    return this.http.get<Recibos>(`${environment.API_URL}/api/recibo/${id}`)
  }

  setRecibos$(registro: Recibos): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/api/recibo`, registro)
  }

  putRecibos$(registro: Recibos): Observable<Recibos> {
    return this.http.put<Recibos>(`${environment.API_URL}/api/recibo/${registro._id}`, registro)
  }

  deleteRecibo$(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/api/recibo/${id}`)
  }
}
