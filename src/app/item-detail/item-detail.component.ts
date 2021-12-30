import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../items/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  constructor(private itemService: ItemService) { }
  items: Item[] =[];
  @Input() item? : Item;
  ngOnInit(): void {
  }

  @Output() deleteEvent = new EventEmitter <Item> ();
  callParrentDelete(){
    this.deleteEvent.emit();
  }
  sellItems(){}
  
  save(): void {
    if (this.item){
      this.itemService.updateItem(this.item);
    }
  }
}
