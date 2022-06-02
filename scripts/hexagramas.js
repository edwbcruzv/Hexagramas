const $n1 = document.getElementById("n1")
const $n2 = document.getElementById("n2")
const $n3 = document.getElementById("n3")

const $btn_aceptar = document.getElementById("btn_aceptar")
const $btn_borrar_linea = document.getElementById("btn_borrar_linea")
const $btn_borrar_hexa = document.getElementById("btn_borrar_hexa")


const line_hexa = (suma) => {

    switch (suma) {
        case 6:
            return "___X___"
            break;
        case 7:
            return "_______"
            break;
        case 8:
            return "___ ___"
            break;
        case 9:
            return "___O___"
            break;
        default:
            break;
    }
}


$btn_aceptar.addEventListener("click",()=>{

    // validar los 3 numeros (FALTA)

    let n1=Number.parseInt( $n1.value)
    let n2=Number.parseInt( $n2.value)
    let n3=Number.parseInt( $n3.value)

    console.log(n1,n2,n3)
    let suma=n1+n2+n3
    console.log(line_hexa(suma))

})

$btn_borrar_linea.addEventListener("click",()=>{


    console.log("aceptar")
})

$btn_borrar_hexa.addEventListener("click",()=>{


    console.log("aceptar")
})