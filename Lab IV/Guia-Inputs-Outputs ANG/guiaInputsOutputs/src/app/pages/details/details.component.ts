import { Component } from '@angular/core';
import { CharacterCardComponent } from '../../Character/character-card/character-card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
