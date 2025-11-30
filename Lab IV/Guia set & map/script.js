/* 1- Dado un array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "María",
    edad: 25 }, { nombre: "Pedro", edad: 30 }], usa map para crear un nuevo array
    de strings que contenga solo los nombres. */

    const arrayPersonas = [
        {nombre: "juan", edad : 20},
        {nombre:  "maria", edad: 25}, 
        {nombre: "Pedro", edad: 30},
        { nombre: "Carlos", edad: 17 }, 
        { nombre: "Ana", edad: 23 }, 
        { nombre: "Luis", edad: 16 }
    ]

   
    const arrayNombres = [...arrayPersonas].map((persona) =>(persona.nombre)); 
    console.log(arrayNombres);


    /* Dado un array de objetos [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana",
    edad: 23 }, { nombre: "Luis", edad: 16 }], usa filter para obtener solo los objetos
    donde la persona sea mayor de edad (edad >= 18). */

    const arrayMayores = arrayPersonas.filter((persona) => persona.edad >=18);

    console.log(arrayMayores);


    /* Dado un array de números [2, 3, 4, 2, 3, 5, 4, 5, 6], utiliza un Map para contar
cuántas veces aparece cada número en el array. El resultado debe ser un Map
donde las claves sean los números del array y los valores sean la cantidad de
veces que cada número aparece. */

const arrayNums = [2,3,4,2,3,5,4,5,6]

const MapContador = new Map(); 

let contador = 0; 

for(i = 0; i< arrayNums.length;i++)
{
    for(j = 0; j< arrayNums.length; j++)
    {
        if(arrayNums[i] === arrayNums[j])
        {
            contador++; 
        }
    }
    MapContador.set(arrayNums[i],contador);
    contador = 0; 
    
}
console.log(MapContador);

/* Dado un array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa una combinación de
filter, map, y reduce para obtener la suma de los cuadrados de los números
pares. */


const arrayNumsOrdenados = [1,2,3,4,5,6,7,8,9,10]; 

const totalParesCuadrados = arrayNumsOrdenados
.filter((pares) =>pares %2 == 0)
.map((cuadrado) => cuadrado **2)
.reduce((total,valor) => total + valor,0); 

console.log(totalParesCuadrados);


/* Dado un objeto { a: 1, b: 2, c: 3 }, transforma el objeto en un Map donde las
claves son las propiedades del objeto y los valores son los valores
correspondientes. */

const arrayobj ={

    a:1,
    b:2,
    c:3,
}

const mapObj = new Map(); 

for(let key in arrayobj)
{
    mapObj.set(key, arrayobj[key]); 
}

console.log(mapObj);
