import { Component } from '@angular/core';

import { Hero } from '../heroes/hero';
import { Items } from '../mock-items';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Tomb Rider', 12000,[Items[1], Items[0]], 12, 10, 'Really Smart');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(182, 'Tomb Rider2', 12000,[Items[1], Items[0]], 12, 10, 'Really Smart');
  }

  

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; 
  }

}
