import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Medicaments} from '../model/medicament.model';
import { MedicamentService } from '../service/medicament';

@Component({
  imports: [FormsModule],
  selector: 'app-add-medicament',
  styleUrl: './add-medicament.css',
  templateUrl: './add-medicament.html',
})
export class AddMedicament implements OnInit {

  newMedicament = new Medicaments();

  constructor(private medicamentService: MedicamentService) {

  }

  addMedicament() {
    //console.log("Nouveau médicament ajouté : ", this.newMedicament);
    this.medicamentService.ajouterMedicament(this.newMedicament);
  }

  ngOnInit(): void {

  }

}
