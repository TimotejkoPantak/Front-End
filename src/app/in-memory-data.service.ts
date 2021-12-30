import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Item } from './items/item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
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