const arraicito = [1,2,3,4,5,6]
const sett = new Set(arraicito); 

sett.add (6); 
sett.delete(3); 
console.log(sett);

const array2 = [...sett]; 
console.log(array2);

const arrayrePeruano = [1, 2, 2, 3, 4, 4, 5]; 

const sett2 = new Set(arrayrePeruano)
console.log(sett2);

const funcionreloca = (sett2) =>{

    if(sett2.has(4))
    {
        console.log("ta re peruano esto");
}
else{
    console.log("no anduvo");
}
}

funcionreloca(sett2); 

const recorrer = (sett2) =>{

    sett2.forEach(e=>bobo(e))
}

function bobo(e) {

    console.log(e);
    
}
recorrer(sett2); 

const ELMAPA = new Map();
ELMAPA.set("nombre","juan");
ELMAPA.set("edad",30);
ELMAPA.set("ciudad","madrid"); 
ELMAPA.set("Pais","Españita");
ELMAPA.delete("ciudad"); 
console.log(ELMAPA.get("nombre")); 
const arraicito2 = ELMAPA.entries(); 
console.log(arraicito2);    
if(ELMAPA.has("edad"))
{
    console.log(ELMAPA.get("edad"));
}
else
{
    console.log("no existe eso pa");
}

const arrayDeArrays = Array.from(ELMAPA);
console.log(arrayDeArrays);
