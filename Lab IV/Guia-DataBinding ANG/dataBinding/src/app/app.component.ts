import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductosComponent} from './Components/productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataBinding';
}
