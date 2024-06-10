import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private URLBase = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any>{
    return this.http.get(this.URLBase +'/character')
  }

  obtenerLocalizacion(): Observable<any>{
    return this.http.get(`${this.URLBase}/location`);
  }

  obtenerEpisodio(): Observable<any>{
    return this.http.get(`${this.URLBase}/episode`);
  }


}
