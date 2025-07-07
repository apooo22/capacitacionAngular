export interface Character{
  name: string;
  hp: number;
  skill: string[];
  hometown?: string;
}


export interface CharacterNew{
  name: string;
  hp: number;
  address:address
}


export interface address {
  street: string;
  country: string;
  city: string
}


export interface CharacterDos{
    name: string;
    hp: number;
    shwoHp: () => void;
}