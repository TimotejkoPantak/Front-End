import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../items/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor() { }
  @Input() item? : Item;
  ngOnInit(): void {
  }
}
