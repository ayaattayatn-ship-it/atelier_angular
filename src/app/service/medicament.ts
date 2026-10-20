import { Injectable } from '@angular/core';
import { Medicaments } from '../model/medicament.model';
import { Forme } from '../model/forme.model';

@Injectable({
  providedIn: 'root',
})
export class MedicamentService {

    medicaments: Medicaments[];
    medicament!: Medicaments;
    forme: Forme[];
    medRecherche! : Medicaments[];

    constructor() {
        console.log("creation de service Medicament");
        this.medicaments = [
            { idMedicament: 1, nomMedicament: "Doliprane", prixMedicament: 5.99, dateLimite: new Date("01-01-2023"), Forme : {idForme : 1 ,nomForme : "comprimé"} },
            { idMedicament: 2, nomMedicament: "Amoxicillin", prixMedicament: 4.99, dateLimite: new Date("01-02-2023"), Forme : {idForme : 2 ,nomForme : "capsule"}},
            { idMedicament: 3, nomMedicament: "Aspegic", prixMedicament: 6.99, dateLimite: new Date("01-03-2023"), Forme : {idForme : 3 ,nomForme : "sachet"}},
            { idMedicament: 4, nomMedicament: "Biafine", prixMedicament: 3.99, dateLimite: new Date("01-04-2023"), Forme : {idForme : 4 ,nomForme : "cream"}}
        ];
        this.forme = [
            { idForme: 1, nomForme: "comprimé" },
            { idForme: 2, nomForme: "capsule" },
            { idForme: 3, nomForme: "sachet" },
            { idForme: 4, nomForme: "cream" },
            { idForme: 5, nomForme: "sirop" },
            { idForme: 6, nomForme: "ear drops" },
            { idForme: 7, nomForme: "inhaler" }
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

  listeForme(): Forme[] {
    return this.forme;
  }

  consulterForme(id: number): Forme {
    return this.forme.find(form  => form.idForme == id)!;
  }

   rechercherParForme(idForm: number): Medicaments[]{
      this.medRecherche = [];
      this.medicaments.forEach((cur, index) => {
       if(idForm == cur.Forme.idForme) {
           console.log("cur "+cur);
          this.medRecherche.push(cur);
           }
     });
     return this.medRecherche;
     }

}
