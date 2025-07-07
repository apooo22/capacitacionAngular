import { Character } from '../interfaz/interfaces';
export function addNumbers (a: number, b: number): number {
    return a + b;
}


export const addNumberLamda = (a: number, b: number) => {
  return a + b;
}


export const addNumberArrow = (a: number, b: number): string => {
  return  `${ a + b }` ;
}


export const addNumberArDos = (firsNumber: number, secondNumber?: number, base: number = 2): number => {
  return  firsNumber * base ;
}


export function whatsMyType<T> ( argumentos: T): T {
    return argumentos;
}