import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Item } from './items/item';
import { Items } from './mock-items';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', items: [Items[0], Items[1]], money: 2000, life: 5, strength: 10},
      { id: 2, name: 'Narco', items: [Items[1], Items[2]],  money: 2500, life: 3, strength: 7},
      { id: 3, name: 'Bombasto', items: [Items[3], Items[4]],  money: 22500, life: 4, strength: 8},
      { id: 4, name: 'Celeritas', items: [Items[5], Items[6]],  money: 58650, life: 5, strength: 3},
      { id: 5, name: 'Magneta', items: [Items[7], Items[0]],  money: 6000, life: 3, strength: 8},
      { id: 6, name: 'RubberMan', items: [Items[5], Items[8]], money: 2, life: 1, strength: 10},
      { id: 6, name: 'RubberMan', items: [Items[5], Items[8]], money: 2950, life: 2, strength: 5},
      { id: 7, name: 'Dynama', items: [Items[2], Items[9]],  money: 6500,life: 4, strength: 10},
      { id: 8, name: 'Dr IQ', items: [Items[1], Items[2]],  money: 2200, life: 5, strength: 6},
      { id: 9, name: 'Magma', items: [Items[1], Items[0]],  money: 1230, life: 2, strength:4},
      { id: 10, name: 'Tornado', items: [Items[8], Items[5]], money: 9870, life: 1, strength: 9}
    ];

    const items = [
      { id: 11, name: 'Iron Hammer', price: 150, isAvailable: true}, 
      { id: 12, name: 'Pistol', price: 250, isAvailable: true},
      { id: 13, name: 'Stick', price: 120, isAvailable: true},
      { id: 14, name: 'Steel Knife', price: 400, isAvailable: true},
      { id: 15, name: 'Scytche', price: 750, isAvailable: true},
      { id: 16, name: 'Cutlass', price: 120, isAvailable: true},
      { id: 17, name: 'Machine Gun', price: 200, isAvailable: true},
      { id: 18, name: "Stone", price: 50, isAvailable: true},
      { id: 19, name: 'Wrench', price: 900, isAvailable: true},
      { id: 20, name: 'Axe', price: 1000, isAvailable: true}]
      return {heroes,items};
  }
  

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }
}