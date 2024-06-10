import { Routes } from '@angular/router';
import { LocalizacionComponent } from './componentes/localizacion/localizacion.component';
import { EpisodiosComponent } from './componentes/episodios/episodios.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';


export const routes: Routes = [

    {
        path: "",
        component: PersonajesComponent
    },
    {
      path: 'localizacion',
      component: LocalizacionComponent
    },
    {
      path: 'episodio',
      component: EpisodiosComponent
    },

];


