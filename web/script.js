

let btn = document.getElementById("boton")

function agregar(){
   
    const task = document.createElement("li"); 
    task.innerHTML = document.getElementById("Tarea").value
const tabla = document.getElementById("tabla")
    tabla.appendChild(task); 
}



