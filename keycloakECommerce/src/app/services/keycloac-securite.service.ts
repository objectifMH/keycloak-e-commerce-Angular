import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak:any ;


@Injectable({
  providedIn: 'root'
})
export class KeycloacSecuriteService {
  public kc:KeycloakInstance ; 

  constructor() { }

  async init() {
    console.log("initialisation du service securite");
    this.kc = new Keycloak({
      "url":"http://localhost:8080/auth",
      "realm":"e-commerce",
      "clientId":"angularProductApp"
    })

    await this.kc.init({
      //il faut se connecter pour acceder à l'application: 
      //onLoad:'login-required'

      //authenfie l'utilisateur au démarrage : 
      onLoad:'check-sso',
      promiseType:"native"
    })
  }


}
