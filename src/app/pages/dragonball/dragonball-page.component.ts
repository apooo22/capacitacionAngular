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
     if ( !this.name() || !this.power() || this.power() <= 0 ){
      return
       }
    const newCharacter: ChacacterArrarN = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
     }
       this.characters.update(
         (list) => [...list, newCharacter]);
     this.resetField();

     }

     resetField(){
      this.name.set('');
      this.power.set(0);
     }



}
