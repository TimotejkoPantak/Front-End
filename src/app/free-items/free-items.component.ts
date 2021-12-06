import { Component, OnInit } from '@angular/core';
import { Item } from '../items/item';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../mock-items';
import { Location } from '@angular/common';


@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})
export class FreeItemsComponent implements OnInit {

  itemsFree = ITEMS;
  hero: Hero;
  heroCash: number;


  constructor(
    private itemService: ItemService,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location ) {  }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.itemsFree = items);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      this.heroCash = this.hero.money;
  }

  buyFreeItems(item: Item): void {
    if (this.heroCash > item.price){
      this.heroCash -=  item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }
}