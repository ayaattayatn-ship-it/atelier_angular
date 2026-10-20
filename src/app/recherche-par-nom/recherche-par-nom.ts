import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../service/medicament';
import { Medicaments } from '../model/medicament.model';
import { Forme } from '../model/forme.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [FormsModule, CommonModule,RouterLink,SearchFilterPipe],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit {

  medicaments!: Medicaments[];
  allmeds!: Medicaments[];
  //nomMedicament! : string;
  searchTerm! : string;
  
  constructor(private medicamentService: MedicamentService){
      
    }
  
    supprimerMedicament(med: Medicaments) {
      //console.log(med);
      let conf = confirm("Etes-vous sûr ?");
      if (conf){
        this.medicamentService.supprimerMedicament(med);
      }
  }



  ngOnInit(): void {
    this.medicaments = this.medicamentService.listeMedicaments();
    //console.log(meds);
    //this.allmeds = meds;
  }


  //onKeyUp(filterText : string){
  //  this.medicaments = this.allmeds.filter(item =>
  //    item.nomMedicament.toLowerCase().includes(filterText));
  //}
  
}
