// EJ 1 
export function mostarMensaje (mensaje, callback)
{
    console.log(mensaje)
    callback()
}


 export function MostrarCallback()
{
    console.log('soy un call callback');

}

// EJ 2 
export function sumarAsync(a,b, callback)
{
    let resultado = a + b
    callback(resultado)
    
}

export function mostrarResultado(resultado)
{
    console.log(resultado);
    
}

// EJ 3 

export function restrasarEjecucion(callback,segs)
{
    setTimeout(() =>
    {
        callback(); 
    },segs);

}

//EJ 4 