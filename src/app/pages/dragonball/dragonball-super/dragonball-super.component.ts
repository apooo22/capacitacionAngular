import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DragonballListComponent } from "../dragonball-list/dragonball-list.component";
import { ChacacterArrarN } from '../../../interfaz/character.interface';

@Component({
  selector: 'app-dragonball-super',
  imports: [DragonballListComponent],
  templateUrl: './dragonball-super.component.html',

})
export class DragonballSuperComponent {



 name  = signal('');   //clase 03 de julio
 power = signal(0);

 characters = signal<ChacacterArrarN[]>([
    {id: 1, name: 'Goku',    power: 9005},
    {id: 1, name: 'Picoro',    power: 9004},


 ]);

 addCharacter() {
  if(!this.name() || !this.power()  || this.power() <= 0){
    return
 }
 const newCharater: ChacacterArrarN ={
   id: this.characters().length + 1,
   name: this.name(),
   power: this.power(),
 }
 this.characters.update((list) => [...list, newCharater]);
 this.resetFields();
 }
        resetFields(){
          this.name.set('');
          this.power.set(0);

    }

     }

