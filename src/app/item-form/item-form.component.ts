import { Component, OnInit } from '@angular/core';
import {FormItem} from '../items/item';
import { Item } from '../items/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  items: FormItem[]=[];
  item: Item[]=[];

  id!: number;
  name!: string;
  price!: number;

  model = new FormItem(this.id, this.name, this.price);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
  }

  addItem() {
    this.itemService.addItem(this.model as Item)
      .subscribe(item => {
        this.items.push(item);
    })

    console.log(this.model);
  }
}