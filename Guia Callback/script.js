// EJ 1 
function mostarMensaje (mensaje, callback)
{
    console.log(mensaje)
    callback()
}


 function MostrarCallback()
{
    console.log('hola puta callback');

}

/// EJ 2 
function sumarAsync(a,b, callback)
{
    let resultado = a + b
    callback(resultado)
    
}

function mostrarResultado(resultado)
{
    console.log(resultado);
    
}


/// EJ 3 

function restrasarEjecucion(callback,segs)
{
    setTimeout(() =>
    {
        callback(); 
    },segs);

}



mostarMensaje("puta",MostrarCallback); 
sumarAsync(2,5,mostrarResultado); 
restrasarEjecucion(MostrarCallback,3000); 