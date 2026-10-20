import { Component, OnInit } from '@angular/core';
import { Medicaments } from '../model/medicament.model'
import { MedicamentService } from '../service/medicament';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Forme } from '../model/forme.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,RouterLink,FormsModule],
  selector: 'app-recherche-par-forme',
  styles: ``,
  templateUrl: './recherche-par-forme.html',
})
export class RechercheParForme implements  OnInit {


  medicaments!: Medicaments[];
  forme! : Forme[];
  IdForme! : number;

  constructor(private medicamentService: MedicamentService){
    
  }

  supprimerMedicament(med: Medicaments) {
    //console.log(med);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.medicamentService.supprimerMedicament(med);
    }
  }

  onChange() {
    //console.log(this.IdForme);
    this.medicaments =  this.medicamentService.rechercherParForme(this.IdForme);
    console.log(this.medicaments);
    
    }

  ngOnInit(): void{
    this.medicaments = this.medicamentService.listeMedicaments();
    this.forme = this.medicamentService.listeForme();

  }

}
