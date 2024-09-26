import { mostarMensaje, mostrarResultado, sumarAsync, MostrarCallback, restrasarEjecucion } from "./Ejercicio/Ejercicios.js";

// Ejercicio 1: Función Callback Básica 

mostarMensaje("hola",MostrarCallback)

/// Ejercicio 2: Callback con Retorno de Datos

sumarAsync(2,5,mostrarResultado); 

/// Ejercicio 3: Uso de setTimeout 

restrasarEjecucion(MostrarCallback,3000); 

/// Ejercicio 4: Callback Anidado
