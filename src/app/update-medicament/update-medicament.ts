import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicamentService } from '../service/medicament';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicaments } from '../model/medicament.model';
import { Forme } from '../model/forme.model';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-update-medicament',
  styles: ``,
  templateUrl: './update-medicament.html',
})
export class UpdateMedicament implements OnInit {

  currentMedicament = new Medicaments();
  forme! : Forme[];
  updateFormId! : number;

  constructor(private activeRoute: ActivatedRoute,private router : Router,private medicamentService: MedicamentService) {

  }

  updateMedicament() {
    //console.log(this.currentMedicament);
    this.currentMedicament.Forme = this.medicamentService.consulterForme(this.updateFormId);
    this.medicamentService.updateMedicament(this.currentMedicament);
    this.router.navigate(['medicament']);
  }


  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.params['id']);
    this.forme = this.medicamentService.listeForme();
    this.currentMedicament = this.medicamentService.consulterMedicament(this.activeRoute.snapshot.params['id']);
    this.updateFormId = this.currentMedicament.Forme.idForme;
    console.log(this.currentMedicament);
  }

}
