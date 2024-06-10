import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EpisodiosComponent } from '../episodios/episodios.component';
import { LocalizacionComponent } from '../localizacion/localizacion.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule, RouterLink, EpisodiosComponent, LocalizacionComponent],
  providers: [RickAndMortyService],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  personajes: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.obtenerPersonajes().subscribe(resultado => {
      this.personajes = resultado.results;
      console.log(this.personajes);
    });
  }
}
