import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'laboratorio10';
}