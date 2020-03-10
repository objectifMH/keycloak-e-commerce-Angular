import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';


const routes: Routes = [
  {path:"produits" , component : ProduitsComponent},
  {path:"fournisseurs" , component : FournisseursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
