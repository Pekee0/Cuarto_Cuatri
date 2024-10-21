import { CommonModule } from '@angular/common';
import { Component, input} from '@angular/core';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    { id: 1, nombre: 'Producto A', precio: 100, descuento: true },
    { id: 2, nombre: 'Producto B', precio: 200, descuento: false },
    { id: 3, nombre: 'Producto C', precio: 300, descuento: false }
    ];

    // agregar event Listener para agregar funcionalidad al boton de agregar producto :D 

    AgregarProducto()
    {
       
    }

}
