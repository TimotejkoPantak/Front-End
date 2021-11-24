import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './items/item';
import { Items } from './mock-items';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Observable<Item[]> {
    const items = of(Items);
    this.messageService.add('ItemService: fetched items');
    return items;
  }


  constructor(private messageService: MessageService) { }
}