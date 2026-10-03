import { Injectable } from '@angular/core';
import { Medicaments } from '../model/medicament.model';

@Injectable({
  providedIn: 'root',
})
export class MedicamentService {

    medicaments: Medicaments[];
    medicament!: Medicaments;

    constructor() {
        console.log("creation de service Medicament");
        this.medicaments = [
            { idMedicament: 1, nomMedicament: "Doliprane", prixMedicament: 5.99, dateCreation: new Date("2023-01-01") },
            { idMedicament: 2, nomMedicament: "Paracetamol", prixMedicament: 4.99, dateCreation: new Date("2023-02-01") },
            { idMedicament: 3, nomMedicament: "Ibuprofène", prixMedicament: 6.99, dateCreation: new Date("2023-03-01") },
            { idMedicament: 4, nomMedicament: "Aspirine", prixMedicament: 3.99, dateCreation: new Date("2023-04-01") }
        ];
    }

  listeMedicaments(): Medicaments[] {
    return this.medicaments;
  }

  ajouterMedicament(med: Medicaments): void {
    this.medicaments.push(med);
  }

    supprimerMedicament(med: Medicaments) {
    //console.log(med);
    //supprimer le medicament med tableau medicaments
    const index = this.medicaments.indexOf(med, 0);
    if (index > -1) {
      this.medicaments.splice(index, 1);
    }
    //ou bien
    /* this.medicaments.forEach((cur, index) => {
        if(med.idMedicament === cur.idMedicament) {
            this.medicaments.splice(index, 1);
        }
    }); */
  }

  consulterMedicament(id: number): Medicaments {
    this.medicament = this.medicaments.find(med => med.idMedicament == id)!;
    return this.medicament;
  }

  updateMedicament(med: Medicaments) {
    //chercher le medicament à modifier dans le tableau medicaments
    const index = this.medicaments.indexOf(med, 0);
    if (index > -1) {
      this.medicaments.splice(index, 1); //supprimer l'ancien éléments
      this.medicaments.splice(index, 0, med); // insérer le nouvel élément
    }
  }

}
