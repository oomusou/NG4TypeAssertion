import { Component } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: Hero[] = [];

  onAddHeroClick() {
    const hero = new Hero();
    hero.name = 'Sam';
    hero.state = 'active';
    this.heroes.push(hero);
  }
}
