import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../items/item';
import { Items } from '../mock-items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor() { }
  items = Items;
  @Input() item? : Item;
  ngOnInit(): void {
  }

}
