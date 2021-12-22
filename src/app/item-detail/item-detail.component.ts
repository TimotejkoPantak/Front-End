import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() deleteEvent = new EventEmitter <Item> ();
  callParrentDelete(){
    this.deleteEvent.emit();
  }
  sellItems(){
    
  }
}
