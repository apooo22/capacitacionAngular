import { Component, signal } from '@angular/core';

 interface ChacacterArrarN{
  id: number;
  name: string;
  power: number;
 }

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {



 name  = signal('');   //clase 03 de julio
 power = signal(0);

 characters = signal<ChacacterArrarN[]>([
    {id: 1, name: 'Goku',    power: 9005},


 ]);

 addCharacter() {

     }



}
