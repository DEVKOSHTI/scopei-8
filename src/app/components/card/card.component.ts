import { Component } from '@angular/core';
import { CardHeroComponent } from "../card-hero/card-hero.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardHeroComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
