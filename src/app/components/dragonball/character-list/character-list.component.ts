import { Component, input } from '@angular/core';
import type { ChacacterArrarN } from '../../../interfaz/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {

   //input nos dice que vamos a resivir una informacion del mundo exterior
  characters = input.required<ChacacterArrarN[]>();
  listName = input.required<string>();
}
