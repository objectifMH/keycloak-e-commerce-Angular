import { Component, OnInit } from '@angular/core';
import { FournisseursService } from '../services/fournisseurs.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: any;
  errorMessage: String;

  constructor(private fs: FournisseursService) { }

  ngOnInit() {
    /*this.fournisseurs = [
      {"id":1 , "nom":"Apple" , "email":"apple@apple.fr"},
      {"id":2 , "nom":"Sony" , "email":"sony@so.ny"},
      {"id":3 , "nom":"BlackBerry" , "email":"black@berry.fr"}

    ]
    */

    this.fs.getFournisseurs()
      .subscribe(
        fournisseurs => {
          console.log("%s %O", "Mes fournisseurs : ", fournisseurs);
          this.fournisseurs = fournisseurs['_embedded']['fournisseurs'];
          console.log(this.fournisseurs);
        },
        err => {
          console.log("%s %O", "Pas de fournisseurs " , err);
          
          this.errorMessage = err.error.message;
          
        }
      )
  }
}
