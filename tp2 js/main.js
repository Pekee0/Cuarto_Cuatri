//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

const arrayNums = [1,2,3,4];


function sumarArrays (arrayNums)
{  
    var num = 0;

    arrayNums.forEach(numerito =>{
        num = num+numerito
    });

   return num; 
}

let ej1 = sumarArrays(arrayNums)
console.log(ej1)

// 2. Promedio: Calcula el promedio de los números en un arreglo

function calcularPromedio(arrayNums)
{
    let total = arrayNums.length; 
    var prom = 0; 
    prom = (sumarArrays(arrayNums) / total)

    return prom; 
}

let ej2 = calcularPromedio(arrayNums)
console.log(ej2);