import { Component } from '@angular/core';
import { FuturamaService } from '../../services/futurama.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [HttpClientModule, MatButtonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss',
  providers: [FuturamaService]
})
export class PersonajesComponent {
  personajes: any[];
  pagina: number;
  pagMax: number;
  
  constructor(private futuramaService: FuturamaService) {
    this.personajes = [];
    this.pagina = 1;
    this.pagMax = 0;
    
    this.mostrarPersonajes(this.pagina);
  }

  mostrarPersonajes(pagina: number) {
    this.futuramaService.getPersonajes(this.pagina).subscribe((data: any) => {
      this.personajes = data.items;
      this.pagMax = data.pages;
    });
  }

  paginaSiguiente() {
    if (this.pagina < this.pagMax) {
      this.pagina++;
      this.mostrarPersonajes(this.pagina);
    }
    else {
      alert('No hay más paginas siguientes.');
    }
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.mostrarPersonajes(this.pagina);
    }
    else {
      alert('No hay más paginas anteriores.');
    }
  }
}