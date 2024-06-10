import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [HttpClientModule, MaterialModule, CommonModule],
  providers: [RickAndMortyService],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent {

  episodio: any;

  constructor(private servicioApi: RickAndMortyService) { }

  ngOnInit(): void {
    this.servicioApi.obtenerEpisodio().subscribe(resultado => {
      this.episodio = resultado.results;
      console.log(this.episodio);
    });
  }


}











