import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any; 

  constructor() { }

  ngOnInit() {
    this.produits = [
      {"id":1 , "nom":"Apple mini 2P" , "prix":566},
      {"id":2 , "nom":"Apple maxi 2423" , "prix":2566},
      {"id":3 , "nom":"BlackBerry mini 4" , "prix":1566}

    ]
  }

}
