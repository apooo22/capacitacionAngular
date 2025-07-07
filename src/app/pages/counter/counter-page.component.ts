import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  [x: string]: any;



  counter = 10;

  counterSignal = signal(10);


  increaseBy(value: number) {
    // this.counter += value;
    // this.counterSignal.update((current) => current + value);
  }

  resetCounter(){
    this.counter = 10;
    this.counterSignal.set(0);
  }


  constructor(){
    setInterval(() => {
     // this.counter += 1;
     // this.counterSignal.update((v) => v + 1);
      console.log('Tick Tock');
    }, 2000)
   }


}
