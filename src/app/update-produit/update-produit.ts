import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-produit',
  styles: ``,
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {

  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.currentProduit =this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentProduit);

    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentProduit = prod;
      this.changeDetector.markForCheck();
    });
  }

  updateProduit() {
    //console.log(this.currentProduit);
    //this.produitService.updateProduit(this.currentProduit);
    //this.router.navigate(['produits']);
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); 
  });

  }



}
