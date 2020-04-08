import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { KeycloacSecuriteService } from './services/keycloac-securite.service';
import { RequestInterceptorService } from './services/request-interceptor.service';


export function kcFactory(kcSecurite: KeycloacSecuriteService) {
  //Permet de démarrer au démarrage de l'application :  
  return ()=> kcSecurite.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    FournisseursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloacSecuriteService], useFactory:kcFactory, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
