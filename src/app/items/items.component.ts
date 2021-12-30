import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ITEMS, Items } from '../mock-items';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  selectedItem?: Item;

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add('ItemsComponent: Selected item id=$(item.id)');
  }

  constructor(private itemService: ItemService, private messageService: MessageService ) { }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as unknown as Item)
      .subscribe(item => {
        this.items.push(item);
    });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }
  
  ngOnInit(): void {
    this.getItems();
  }

  }


