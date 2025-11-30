import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterFormComponentComponent } from "./Components/character-form-component/character-form-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-outputguia';
}
