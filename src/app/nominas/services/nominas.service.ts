import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';

import { Nominas } from './../models/nominas.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NominasService {
  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getNominas$(): Observable<Nominas[]> {
    return this.http
      .get<Nominas[]>(`${environment.API_URL}/api/nomina`)
  }

  setNominas$(registro: Nominas): Observable<any> {
    return this.http
      .post<any>(`${environment.API_URL}/api/nomina`, registro)
  }

  getNomina$(id): Observable<Nominas> {
    return this.http.get<Nominas>(`${environment.API_URL}/api/nomina/${id}`)
  }

  putNominas$(registro: Nominas): Observable<Nominas> {
    return this.http.put<Nominas>(`${environment.API_URL}/api/nomina/${registro._id}`, registro)
  }

  deleteNominas$(registro: Nominas): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}/api/nomina/${registro._id}`)
  }
}
