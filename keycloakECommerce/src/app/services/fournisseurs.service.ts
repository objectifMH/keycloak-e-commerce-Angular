import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloacSecuriteService } from './keycloac-securite.service';


@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  private url = 'http://localhost:8084/fournisseurs';


  constructor(private http: HttpClient, private kcService: KeycloacSecuriteService) { }

  getFournisseurs() {
    return this.http.get(this.url,
      {
        headers: new HttpHeaders(
          {Authorization: 'Bearer ' + this.kcService.kc.token }
        )
      }
    );

  }

}
