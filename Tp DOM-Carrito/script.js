
function Producto(nombre,precio,cantidad)
{
    this.precio = precio; 
    this.nombre = nombre; 
    this.cantidad = cantidad; 
}


const btn = document.getElementById("boton"); 

btn.addEventListener("click", function () 
{
    

    const nombre = document.createElement("input");
    const precio = document.createElement("input");
    const cantidad = document.createElement("input");

    console.log(nombre.innerHTML = document.getElementById("nombre").value);
    console.log(precio.innerHTML = document.getElementById("precio").value);
    console.log( cantidad.innerHTML = document.getElementById("cantidad").value);
    


    
    

}); 