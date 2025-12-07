import { Component } from '@angular/core';
import { Form } from './form/form';
import { cards, CardItem } from '../data';

@Component({
  selector: 'app-home',
  imports: [Form],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards: CardItem[] = cards;
}
