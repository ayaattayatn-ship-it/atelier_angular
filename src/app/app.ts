import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mesProduits');
}
