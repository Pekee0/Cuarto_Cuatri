var nombre = "gonza"; 
console.log(nombre);    

function suma(a,b) 
{
    return a+b; 
}

console.log ( suma(1,2))

const pi = 3.14159
console.log (pi)


function saludar(nombre)
{
    console.log(`QUE ONDA ${nombre}`)
}

esPar = (num) => num%2==0 ? true:false 

console.log(esPar(2))

const ArrayReLoco = [2,3,4]; 

function sumarArray(ArrayReLoco)
{
    var num = 0;
    for (i = 0; i< ArrayReLoco.length; i++)
    {
        num = num + ArrayReLoco[i]
    }

    return num; 
    
}

console.log(sumarArray(ArrayReLoco))


const persona = {

    nombre: 'gonza',
    edad: 20, 
    profesion: 'estudiante', 
}

console.log(persona)


function producto(nombre, precio, stock)
{
    this.nombre = nombre; 
    this.precio = precio; 
    this.stock = stock; 
}

var productito = new producto('chocolate', 200,4); 
console.log(productito); 

