import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicamentService } from '../service/medicament';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicaments } from '../model/medicament.model';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-update-medicament',
  styles: ``,
  templateUrl: './update-medicament.html',
})
export class UpdateMedicament implements OnInit {

  currentMedicament = new Medicaments();

  constructor(private activeRoute: ActivatedRoute,private router : Router,private medicamentService: MedicamentService) {

  }

  updateMedicament() {
    //console.log(this.currentMedicament);
    this.medicamentService.updateMedicament(this.currentMedicament);
    this.router.navigate(['medicament']);
  }


  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.params['id']);
    this.currentMedicament = this.medicamentService.consulterMedicament(this.activeRoute.snapshot.params['id']);
    console.log(this.currentMedicament);
  }

}
