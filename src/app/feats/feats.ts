import { Component } from '@angular/core';
import { CardItem, feats } from '../data';

@Component({
  selector: 'app-feats.',
  imports: [],
  templateUrl: './feats.html',
  styleUrl: './feats.css',
})
export class Feats {
  feats: CardItem[] = feats;
}
