
import { Tarea } from "./producto.js";
function Producto(nombre,precio,cantidad)
{
    this.precio = precio; 
    this.nombre = nombre; 
    this.cantidad = cantidad; 
}



const btn = document.getElementById("boton"); 

btn.addEventListener("click", function () 
{    
    const nombre= document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
     const cantidad = document.getElementById("cantidad").value

    const Tarea1 = new Tarea(nombre,precio,cantidad); 
    console.log(Tarea1);
    
    if(Tarea1.nombre != "" && Tarea1.cantidad != "" && Tarea1.precio != "")
    {
        // boton de borrar tarea 
        const btnDelete = document.createElement("button"); 
        btnDelete.innerText = "Borrar"; 

        // Lista de tareas
        const listita = document.getElementById("ListitaDeTareas");

        // Tag contenedor de la tarea
        const tareitaenlalista = document.createElement("li");
        
        tareitaenlalista.append(JSON.stringify(Tarea1)); 
        listita.appendChild(tareitaenlalista)
        tareitaenlalista.appendChild(btnDelete)

        // total
        const total = document.getElementById("totalCompra").value; 
        listita.forEach(Tarea1 => {
            total.innerText = (Tarea1.cantidad.value) * (Tarea1.precio.value)
        listita.appendChild(total);
        });

        /// listener para borrar 
        btnDelete.addEventListener("click",()=>{
        listita.removeChild(tareitaenlalista);
        
        })
    }
    else
    {
        alert("TA VACIO PA ");
    }
}); 


 

