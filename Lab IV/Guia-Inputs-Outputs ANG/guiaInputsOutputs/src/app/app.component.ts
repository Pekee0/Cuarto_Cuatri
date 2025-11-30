import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { CharacterPageComponent } from "./pages/character-page/character-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, InicioComponent, CharacterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guiaInputsOutputs';
}
