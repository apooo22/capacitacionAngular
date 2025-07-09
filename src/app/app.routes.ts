import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperComponent } from './pages/dragonball/dragonball-super/dragonball-super.component';




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
    path: 'dragonball-super',
    component: DragonballSuperComponent
  },


  {
    path: '**',
    redirectTo: '',
  },

];



