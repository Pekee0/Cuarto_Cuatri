
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

// EJ 6

const btn2 = document.getElementById("buttonEJ6"); 
btn2.addEventListener('click', ()=>{

    const txt = document.getElementById("textEJ6").value
    const parrafin2LAresurrecciondeparrafin = document.createElement("p");
    parrafin2LAresurrecciondeparrafin.innerText= txt
    const doc= document.getElementById("formEJ6")
    doc.appendChild(parrafin2LAresurrecciondeparrafin);
})

//EJ 7


    document.addEventListener("keypress",(event) => {
        const doc= document.getElementById("formEJ6")
        const parrafin3masparrafinquenunca = document.createElement("p");
        const keycode = event.key;
        console.log(keycode);
        parrafin3masparrafinquenunca.textContent = keycode;
        doc.appendChild(parrafin3masparrafinquenunca)
    })

//EJ 8

    const listita = document.createElement("ul");
    const elementodelalistita = document.createElement("li")
    const div2 = document.getElementById("miDiv2")


    elementodelalistita.textContent = "hola que onda"

    elementodelalistita.addEventListener("click", () => {
        if(elementodelalistita.classList.contains("Colorlistita"))
        {
            elementodelalistita.classList.remove ("Colorlistita")
        }
        else
        elementodelalistita.classList.add ("Colorlistita")
    })

  
    listita.appendChild(elementodelalistita)
    div2.appendChild(listita);

// EJ 9 

const doc2= document.getElementById("miDiv3")
const parrrafin4parrafinPorSiempre= document.createElement('p')
const btn3= document.createElement("button")
btn3.innerText= "Presioname Esta"
doc2.appendChild(btn3);
var contador= 0;
btn3.addEventListener("click", ()=>{

    parrrafin4parrafinPorSiempre.innerText= contador++;
})

doc2.appendChild(parrrafin4parrafinPorSiempre)

// EJ 10 
const foto1 = document.getElementById("janemba")
const textofoto1 = document.getElementById("janemba").title
const parrafin5parrafin_Origenes = document.createElement("p")
foto1.addEventListener("click", ()=>{
    parrafin5parrafin_Origenes.innerText = textofoto1
})

div2.appendChild(parrafin5parrafin_Origenes)

// EJ 11
const btn4 = document.createElement("button")
btn4.innerText = ("Div_1_Controller")

btn4.addEventListener("click",()=>{
    if(div.classList.contains("divClass"))
    {
        div.classList.remove("divClass")
    }
    else
    div.classList.add("divClass")
})

div2.appendChild(btn4); 


// EJ 12

const select = document.getElementById("selectEj12")










