import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ChacacterArrarN } from '../../../interfaz/character.interface';

@Component({
  selector: 'dragolball-character-add',
  imports: [],
  templateUrl: './dragolball-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragolballAddComponent {


  name  = signal('');   //clase 03 de julio
  power = signal(0);


  newCharacter = output<ChacacterArrarN>();

addCharacter() {
    if(!this.name() || !this.power()  || this.power() <= 0){
      return
   }
   const newCharater: ChacacterArrarN ={
     //  id: this.characters().length + 1,
     id: Math.floor(Math.random() * 1000),
     name: this.name(),
     power: this.power(),
   }
    this.newCharacter.emit(newCharater);

   //this.characters.update((list) => [...list, newCharater]);
    console.log({ newCharater })
   this.resetFields();
   }
          resetFields(){
            this.name.set('');
            this.power.set(0);

      }


 }
