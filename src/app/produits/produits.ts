import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})

export class ProduitsComponent implements OnInit {
  produits: Produit[]; //un tableau de Produit


  constructor(  private produitService: ProduitService) {
    this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {

  }
  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.produitService.supprimerProduit(p);
    }
    //console.log(p);
  }

}



