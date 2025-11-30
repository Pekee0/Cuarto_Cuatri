//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

const arrayNums = [3,1,4,2,2];


function sumarArrays (arrayNums)
{  
    var num = 0;

    arrayNums.forEach(numerito =>{
        num = num+numerito
    });

   return num; 
}

let ej1 = sumarArrays(arrayNums)
console.log(`La sumatoria de los elementos del array es: ${ej1}`)

//2. Promedio: Calcula el promedio de los números en un arreglo

function calcularPromedio(arrayNums)
{
    let total = arrayNums.length; 
    var prom = 0; 
    prom = (sumarArrays(arrayNums) / total)

    return prom; 
}

let ej2 = calcularPromedio(arrayNums)
console.log(`El promedio de los elementos del array es: ${ej2}`);

//3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números. 

function searchMaxAndMin(arrayNums)
{
    let max = Math.max(...arrayNums)
    let min = Math.min(...arrayNums)

    return{max,min}; 
}

var{max,min} = searchMaxAndMin(arrayNums)

console.log(`El valor maximo es: ${max}`)
console.log(`El valor minimo es: ${min}`)

//4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.

function BuscarEspecifico(arrayNums,numerito)
{  
    return arrayNums.indexOf(numerito); 
}

const encontrado = BuscarEspecifico(arrayNums,2)
console.log(`el numero se encuntra en la pos: ${encontrado}`); 

//5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares.


function separarEnPares(arrayNums)
{
    const pares = [];
    const impares = [];
    
    arrayNums.forEach(element => {
        
        if(element%2 == 0)
        {
            pares.push(element); 
        }
        else
        {
            impares.push(element)
        }
    });

    console.log(`se muestran los arrays separados`); 
    console.log(pares)
    console.log(impares)
}

separarEnPares(arrayNums)

// 6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.

function EliminarDuplicados(arrayNums)
{    
    const sinRepes = [...new Set(arrayNums)]; 

    console.log(sinRepes); 
}


EliminarDuplicados(arrayNums)

// 7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente

function OrdenarAscendente(arrayNums)
{
    return arrayNums.sort((a,b) => a-b);
    
}

const nuevoArray = OrdenarAscendente(arrayNums); 
console.log(nuevoArray)

//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

function EliminarEspecifico(arrayNums, numerito)
{
    return arrayNums.filter(Element => Element !== numerito)
}

const arrayconelementoborrado = EliminarEspecifico(arrayNums,1); 
console.log(arrayconelementoborrado); 


//9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.

function fusionarSinRepetir(array1, array2)
{
     const fusion =[...array1,...array2]
     let nuevoArray= [...new Set(fusion)]

    console.log(`Se muestra la fusion ${nuevoArray}`)
}

const array1 = [2,4,6,8]
const array2 = [1,3,5,7,8]

fusionarSinRepetir(array1,array2)

// 10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.

function Producto (nombre,precio,stockDisponible) {
    this.nombre = nombre,
    this.precio = precio,
    this.stockDisponible = stockDisponible
}

ListadeCompras = []

function AgregarALaLista(Producto)
{
    ListadeCompras.push(Producto)
}
manzana = new Producto('Manzana',200,3);
AgregarALaLista(manzana)
console.log(ListadeCompras)


