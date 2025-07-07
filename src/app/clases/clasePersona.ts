import { address } from '../interfaz/interfaces';
export class Person {
  //public name: string;
  //private address: string;

  constructor(
        public firstName: string,
        public lastName: string,
        public address: string = 'No address'
   ){

  }
}

export class HeroNew {

   //public person: Person;

  constructor (
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ){
    //super(realName, 'New York')
    this.person = new Person(realName, 'Cr 57 Sal si puedes')
  }

}
