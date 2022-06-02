
const $numero=document.getElementById("numero")
const $descripcion=document.getElementById("descripcion")

const mostrarDato = (event) =>{
    // console.log(event.target.innerHTML) // otra forma

    let numero=event.target.getAttribute("id")
    let descripcion="describiendo uno de los cuadros"

    $numero.innerText=numero
    $descripcion.innerText=descripcion


    console.log(numero)
    
}

for (let n = 1; n <= 64; n++) {
    document.getElementById(n).addEventListener("mouseover",mostrarDato)
    
}

