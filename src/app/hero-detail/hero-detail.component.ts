import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ITEMS } from '../mock-items';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Item } from '../items/item';
import { ReplaySubject } from 'rxjs';
import { Items } from '../mock-items';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;
  itemsFree = ITEMS;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  click(): void { }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  sellItems(item: Item): void {
    if(item.isAvailable == false){
      this.hero.money += item.price;
      item.isAvailable = true;
      this.itemsFree.push(item);
      this.deleteMsg(item);
    }
  }

  deleteMsg(item:Item) {
    const index: number = this.hero.items.indexOf(item);
    if (index !== -1) {
        this.hero.items.splice(index, 1);
    }
  }
}