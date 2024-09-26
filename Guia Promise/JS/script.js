// EJ 1
 function EJ1 ()
{
    return new Promise((resolve) =>{

        setTimeout(() =>{

            resolve("Promesa cumplida")

        },2000); 
    }); 
}

EJ1().then((texto)=>{

    console.log(texto);
    
});

// EJ 2 
function EJ2(numero)
{
    return new Promise((resolve) => {
        setTimeout (() =>{
                 numero = numero *2; 
                 resolve(numero); 
        },1000);
    }); 
}

EJ2(2)
    .then((numero) =>{
    console.log(numero);
})

// EJ 3 
const EJ3 =  new Promise((resolve)=>{
        
        setTimeout(() => {
            resolve('hola');
        }, 3000);
        
    }); 


const EJ3bis =  new Promise((resolve) =>{

        setTimeout(() => {
            resolve('chau');
        }, 3000);
        
    });


Promise.all([EJ3,EJ3bis]).then((resultados) =>{
    console.log(resultados); 
}); 

// EJ 4 

const url = "https://pokeapi.co/api/v2/pokemon/dragonite"; 

const getApi = async(url) =>{


    return new Promise((resolve,reject) =>{
        setTimeout (async() => {
            const resultado = await fetch(url,{
                method:"GET"
            }); 
            const data = await resultado.json(); 
            resolve(data); 
            reject("salio todo mal"); 
        }, 2000);

    })
}

getApi(url).then((resolve) =>{
    console.log(resolve);
})


/// EJ 5 
const numeros = [1,2,3,4,5] 
function EJ5(numeros)
{
    return new Promise((resolve, reject) => {
            setTimeout(() =>{
            
                const suma = numeros.reduce((acumulador,actual) =>{
                    return acumulador + actual;  
                },0)
            resolve(suma);   
            reject("ERROR");
        },1000)

    })
}

EJ5(numeros).then((num)=>{
    console.log(num);
})

// EJ 6 
