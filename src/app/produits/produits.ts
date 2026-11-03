import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})

export class ProduitsComponent implements OnInit {
  produits: Produit[] = []; //un tableau de Produit


  constructor(
    private produitService: ProduitService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {
    //this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }
  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    this.changeDetector.markForCheck();
  });
}

  supprimerProduit(p: Produit) {
    //let conf = confirm("Etes-vous sûr ?");
    //if (conf){
    //  this.produitService.supprimerProduit(p);
    //}
    //console.log(p);*
    let conf = confirm("Etes-vous sûr ?");
    if (conf && p.idProduit !== undefined) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
        //this.router.navigate(['produits']);
      });
    }
  }
  

}
