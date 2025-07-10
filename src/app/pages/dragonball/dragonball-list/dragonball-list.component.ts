import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ChacacterArrarN } from '../../../interfaz/character.interface';

@Component({
  selector: 'app-dragonball-list',
  imports: [],
  templateUrl: './dragonball-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballListComponent {


  characters = input.required<ChacacterArrarN[]>();
  listName = input.required<string>();

}
