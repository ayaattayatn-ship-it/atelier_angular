import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
  produits! : string[];
  
  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }


}
