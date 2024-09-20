
// EJ 1
const parrafin = document.getElementById("miParrafo");
parrafin.textContent = ('hola modded');

// EJ 2
const div = document.getElementById("miDiv");
div.className = "Resaltado"; 


// EJ 3
const list = document.getElementById("miLista");
list.parentNode.removeChild(list); 

// EJ 4 
const btn = document.getElementById("miButton");
btn.addEventListener("click", () =>{
        console.log("se hizo click");
})

// EJ 5
div.addEventListener("mouseover",() =>{
    div.classList.add("ColorEffect")
})     

div.addEventListener('mouseout',()=>{
div.classList.remove("ColorEffect")
})

