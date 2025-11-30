import { Component } from '@angular/core';
import { CharacterListComponentComponent } from '../../Character/character-list-component/character-list-component.component';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CharacterListComponentComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent {

}
