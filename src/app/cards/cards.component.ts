import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-cards',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards = [
    { title: 'Card 1', image: 'https://via.placeholder.com/300', description: 'This is card 1 description' },
    { title: 'Card 2', image: 'https://via.placeholder.com/300', description: 'This is card 2 description' },
    { title: 'Card 3', image: 'https://via.placeholder.com/300', description: 'This is card 3 description' },
    { title: 'Card 4', image: 'https://via.placeholder.com/300', description: 'This is card 4 description' }
  ];
}
