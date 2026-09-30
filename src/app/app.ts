import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProduitsComponent } from './produits/produits';

@Component({
  imports: [RouterOutlet,RouterLink,ProduitsComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mesProduits');
}
