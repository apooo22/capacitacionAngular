import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';


export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },

  {
    path: 'hero',
    component: HeroPagesComponent
  },

  {
    path: 'dragonball',
    component: DragonballPageComponent
  },

  {
    path: '**',
    redirectTo: '',
  },

];



