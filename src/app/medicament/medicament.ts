import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Medicaments } from '../model/medicament.model';
import { MedicamentService } from '../service/medicament';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-medicament',
  styleUrl: './medicament.css',
  templateUrl: './medicament.html',
})
export class Medicament implements OnInit {


  medicament : Medicaments[];

  constructor(private medicamentService: MedicamentService) {
    this.medicament = this.medicamentService.listeMedicaments();
  }


  //constructor() {
  //  this.medicament = [
  //    { idMedicament: 1, nomMedicament: "Doliprane", prixMedicament: 5.99, dateLimite: new Date("2023-01-01") },
  //    { idMedicament: 2, nomMedicament: "Paracetamol", prixMedicament: 4.99, dateLimite: new Date("2023-02-01") },
  //    { idMedicament: 3, nomMedicament: "Ibuprofène", prixMedicament: 6.99, dateLimite: new Date("2023-03-01") },
  //    { idMedicament: 4, nomMedicament: "Aspirine", prixMedicament: 3.99, dateLimite: new Date("2023-04-01") }
  //  ];
  //}

  supprimerMedicament(med: Medicaments) {
    //console.log(med);
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.medicamentService.supprimerMedicament(med);
    }
  }

  ngOnInit(): void {

  }


  }




