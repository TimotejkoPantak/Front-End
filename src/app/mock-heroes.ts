import { Hero } from "./heroes/hero";
import { Items } from "./mock-items";

export const HEROES: Hero[] = [
  { id: 1, name: 'Dr Nice', items: [Items[0], Items[1]], money: 2000, life: 5, strength: 10, power: 'Super Hot' },
  { id: 2, name: 'Narco', items: [Items[1], Items[2]],  money: 2500, life: 3, strength: 7, power: 'Super Hot'},
  { id: 3, name: 'Bombasto', items: [Items[3], Items[4]],  money: 22500, life: 4, strength: 8, power: 'Super Hot'},
  { id: 4, name: 'Celeritas', items: [Items[5], Items[6]],  money: 58650, life: 5, strength: 3, power: 'Super Hot'},
  { id: 5, name: 'Magneta', items: [Items[7], Items[0]],  money: 6000, life: 3, strength: 8, power: 'Super Hot'},
  { id: 6, name: 'RubberMan', items: [Items[5], Items[8]], money: 2, life: 1, strength: 10, power: 'Super Hot'},
  { id: 6, name: 'RubberMan', items: [Items[5], Items[8]], money: 2950, life: 2, strength: 5, power: 'Super Hot'},
  { id: 7, name: 'Dynama', items: [Items[2], Items[9]],  money: 6500,life: 4, strength: 10, power: 'Super Hot'},
  { id: 8, name: 'Dr IQ', items: [Items[1], Items[2]],  money: 2200, life: 5, strength: 6, power: 'Super Hot'},
  { id: 9, name: 'Magma', items: [Items[1], Items[0]],  money: 1230, life: 2, strength:4, power: 'Super Hot'},
  { id: 10, name: 'Tornado', items: [Items[8], Items[5]], money: 9870, life: 1, strength: 9, power: 'Super Hot'}]