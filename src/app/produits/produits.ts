import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';


@Component({
  imports: [CommonModule],
  selector: 'app-produits',
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
    
    console.log(p);
  }

}



