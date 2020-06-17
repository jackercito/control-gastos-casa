import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth0Service } from './../../security/services/auth0.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumenesService {

  constructor(private http: HttpClient, private auth: Auth0Service) { }

  gerResumenes(fechaInicio: Date, fechaFin: Date): Observable<Blob> {
    return this.http.get<Blob>(`${environment.API_URL}/api/resumen/${fechaInicio}/${fechaFin}`, { responseType: 'blob' as 'json' })
  }
}
