import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DragonballListComponent } from "../dragonball-list/dragonball-list.component";
import { ChacacterArrarN } from '../../../interfaz/character.interface';
import { DragolballAddComponent } from "../dragolball-add/dragolball-add.component";

@Component({
  selector: 'app-dragonball-super',
  imports: [DragonballListComponent, DragolballAddComponent],
  templateUrl: './dragonball-super.component.html',

})
export class DragonballSuperComponent {



 name  = signal('');   //clase 03 de julio
 power = signal(0);

 characters = signal<ChacacterArrarN[]>([
    {id: 1, name: 'Goku',    power: 9005},
    {id: 1, name: 'Picoro',    power: 9004},


 ]);

 addCharacter(character: ChacacterArrarN) {
   this.characters.update(
      list => [...list, character]
   )
 }

        resetFields(){
          this.name.set('');
          this.power.set(0);

    }

     }

