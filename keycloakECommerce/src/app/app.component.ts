import { Component, OnInit } from '@angular/core';
import { KeycloacSecuriteService } from './services/keycloac-securite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'keycloakECommerce';
  constructor(public securityService: KeycloacSecuriteService){}
  ngOnInit(): void {

  }

  onLogOut() {
    console.log(this.securityService.kc.tokenParsed["name"] +" va etre deconnecté");
    this.securityService.kc.logout();
  }

  onLogIn() {
    this.securityService.kc.login();
  }

  onChangePwd() {
    this.securityService.kc.accountManagement();
  }

  isAppManager() {
    return this.securityService.kc.hasRealmRole("app-manager");
  }
}
