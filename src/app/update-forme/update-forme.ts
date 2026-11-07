import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Forme } from '../model/forme.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-forme',
  styles: ``,
  templateUrl: './update-forme.html',
})
export class UpdateForme implements OnInit {

  @Input()
  forme! : Forme;

  @Output()
  formeUpdated = new EventEmitter<Forme>();

  @Input()
  ajout!:boolean;


  ngOnInit(){
    console.log("ngOnInit du composant UpdateForme ",this.forme);
  }

  saveForme(){
    this.formeUpdated.emit(this.forme);
  }


}
