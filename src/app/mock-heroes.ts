import { Hero } from "./heroes/hero";
import { Items } from "./mock-items";

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice', items: [Items[0], Items[1]], money: 765},
  { id: 12, name: 'Narco', items: [Items[1], Items[2]],  money: 13},
  { id: 13, name: 'Bombasto', items: [Items[3], Items[4]],  money: 56},
  { id: 14, name: 'Celeritas', items: [Items[5], Items[6]],  money: 78},
  { id: 15, name: 'Magneta', items: [Items[7], Items[0]],  money: 90},
  { id: 16, name: 'RubberMan', items: [Items[5], Items[8]], money: 675},
  { id: 17, name: 'Dynama', items: [Items[2], Items[9]],  money: 343},
  { id: 18, name: 'Dr IQ', items: [Items[1], Items[2]],  money: 534},
  { id: 19, name: 'Magma', items: [Items[1], Items[0]],  money: 908},
  { id: 20, name: 'Tornado', items: [Items[8], Items[5]], money:945}]