import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../service/medicament';
import { Forme } from '../model/forme.model';
import { UpdateForme } from '../update-forme/update-forme';
import { CommonModule } from '@angular/common';

@Component({
  imports: [UpdateForme,CommonModule],
  selector: 'app-liste-formes',
  styles: ``,
  templateUrl: './liste-formes.html',
})
export class ListeFormes implements OnInit{
  formes!: Forme[];

  updatedForm:Forme = {"idForme":0,"nomForme":""};

  ajout:boolean=true;


  constructor(private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.formes = this.medicamentService.listeForme();
    console.log(this.formes);
  }


  formeUpdated(forme: Forme): void {
    console.log('forme reçue du composant updatedForm', forme);
    const index = this.formes.findIndex((f) => f.idForme === forme.idForme);
    if (index !== -1) {
      this.formes[index] = forme;
    } else {
      this.medicamentService.ajouterForme(forme);
    }
    this.updatedForm = { idForme: 0, nomForme: '' };
  }

  updateForm(form:Forme) {
    this.updatedForm = form;
    this.ajout=false; 
  }


}
