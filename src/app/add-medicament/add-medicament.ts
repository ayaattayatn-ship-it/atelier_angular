import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Medicaments} from '../model/medicament.model';
import { MedicamentService } from '../service/medicament';
import { Router } from '@angular/router';
import { Forme } from '../model/forme.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-medicament',
  styleUrl: './add-medicament.css',
  templateUrl: './add-medicament.html',
})
export class AddMedicament implements OnInit {

  newMedicament = new Medicaments();
  forme! : Forme[];
  newIdForme! : number;
  newForme! : Forme;

  constructor(private medicamentService: MedicamentService,private router : Router) {

  }

  addMedicament() {
    //console.log("Nouveau médicament ajouté : ", this.newMedicament);
    this.newForme = this.medicamentService.consulterForme(this.newIdForme);
    this.newMedicament.Forme = this.newForme;
    this.medicamentService.ajouterMedicament(this.newMedicament);
    this.router.navigate(['medicament']);
  }

  ngOnInit(): void {
    this.forme = this.medicamentService.listeForme();
  }

}
