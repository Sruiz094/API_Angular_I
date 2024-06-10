import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [HttpClientModule, MaterialModule, CommonModule],
  providers: [RickAndMortyService],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css'
})
export class LocalizacionComponent {
  localizacion: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.obtenerEpisodio().subscribe(resultado => {
      this.localizacion = resultado.results;
      console.log(this.localizacion);
    });
  }
}






