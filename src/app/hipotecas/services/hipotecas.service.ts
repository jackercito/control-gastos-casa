import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';

import { Hipotecas } from './../models/hipotecas.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HipotecasService {
  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getHipotecas$(): Observable<Hipotecas[]> {
    return this.http
      .get<Hipotecas[]>(`${environment.API_URL}/api/hipoteca`)
  }

  setHipotecas$(registro: Hipotecas): Observable<any> {
    return this.http
      .post<any>(`${environment.API_URL}/api/hipoteca`, registro)
  }

  getHipoteca$(id): Observable<Hipotecas> {
    return this.http.get<Hipotecas>(`${environment.API_URL}/api/hipoteca/${id}`)
  }

  putHipotecas$(registro: Hipotecas): Observable<Hipotecas> {
    return this.http.put<Hipotecas>(`${environment.API_URL}/api/hipoteca/${registro._id}`, registro)
  }

  deleteHipotecas$(registro: Hipotecas): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/api/hipoteca/${registro._id}`)
  }
}
