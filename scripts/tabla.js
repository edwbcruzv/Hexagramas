const datos = {
    1:{"desc":"Cielo. Lo creativo. El principio generador"},
    2:{"desc":"Tierra. Lo receptivo. El principio pasivo"},
    3:{"desc":"Acumular. El obstáculo inicial.La dificultad del comienzo"},
    4:{"desc":"Juventud.El joven necio.La inmadurez."},
    5:{"desc":"Esperar.La espera.La maduración."},
    6:{"desc":"Disputar.El conflicto.El pleito."},
    7:{"desc":"Ejército.La legión."},
    8:{"desc":"Solidaridad.La unión"},
    9:{"desc":"Animalito doméstico.La pequeña fuerza"},
    10:{"desc":"Caminar.El porte.El paso cauteloso"},
    11:{"desc":"Prosperidad.La paz.La armonía."},
    12:{"desc":"Cierre.El estancamiento.Lo inerte."},
    13:{"desc":"Hombres Reunidos. La unión comunitaria"},
    14:{"desc":"Gran dominio. La gran posesión.Lo que se tiene de más."},
    15:{"desc":"Condescendencia. La modestia.La humildad"},
    16:{"desc":"Ocuparse.El entusiasmo.La algarabía."},
    17:{"desc":"Conformarse.La continuidad.El seguimiento."},
    18:{"desc":"Destrucción.La reconstrucción. La labor en lo corrompido."},
    19:{"desc":"Acercarse.Lo que va llegando."},
    20:{"desc":"Observar.La contemplación. "},
    21:{"desc":"Quebrar mordiendo.La dentellada.La filosa mordedura"},
    22:{"desc":"Adornar.La elegancia.La gracia."},
    23:{"desc":"Resquebrajar.La desintegración.El derrumbe"},
    24:{"desc":"Regresar.El retorno.Lo que vuelve."},
    25:{"desc":"Sinceridad. La inocencia.La naturalidad."},
    26:{"desc":"Fuerza educadora.El poder de lo fuerte.La gran acumulación."},
    27:{"desc":"Nutrirse.La alimentación.Las fauces."},
    28:{"desc":"Excesos.La preponderancia de lo grande."},
    29:{"desc":"Peligro.Lo abismal.La caida."},
    30:{"desc":"Distinguir.El resplandor.Lo adherente."},
    31:{"desc":"Unir.La influencia.La atracción."},
    32:{"desc":"Luna Creciente.La duración. La permanencia.33.Retirarse.EL repliegue."},
    33:{"desc":"Retirarse.EL repliegue."},
    34:{"desc":"Gran fuerza.El gran vigor."},
    35:{"desc":"Progresar.El avance."},
    36:{"desc":"Luz que se apaga.El oscurecimiento."},
    37:{"desc":"Gente de familia. El clan."},
    38:{"desc":"Contraste.La oposición.El antagonismo."},
    39:{"desc":"Dificultad.El obstáculo. El impedimento."},
    40:{"desc":"Explicar.La liberación. El alivio."},
    41:{"desc":"Perder.La disminución.42.Evolución.El aumento.La ganancia."},
    42:{"desc":"Evolución.El aumento.La ganancia."},
    43:{"desc":"Decidir.El desbordamiento.La resolución."},
    44:{"desc":"Encontrarse.El acoplamiento."},
    45:{"desc":"Cosechar.La reunión.La convergencia."},
    46:{"desc":"Subir.El ascenso.La escalada."},
    47:{"desc":"Angustia.La pesadumbre.El agotamiento."},
    48:{"desc":"El pozo de agua.La fuente."},
    49:{"desc":"Renovar.La revolución.El cambio"},
    50:{"desc":"La caldera.Lo alquímico"},
    51:{"desc":"Trueno.La conmoción.Lo suscitativo."},
    52:{"desc":"Cimientos.La quietud.La detención."},
    53:{"desc":"Evolución.El progreso gradual."},
    54:{"desc":"Desposar a la hija menor.La doncella."},
    55:{"desc":"Abundancia.La plenitud."},
    56:{"desc":"Viajero.El andariego"},
    57:{"desc":"Viento.Lo penetrante.Lo suave."},
    58:{"desc":"Recogerse. La serenidad. La satisfacción."},
    59:{"desc":"Confusión. La dispersión.La disolución "},
    60:{"desc":"Moderación.La restricción.La limitación "},
    61:{"desc":"Fe Interior.La verdad interior.La sinceridad interna."},
    62:{"desc":"Pequeñas cosas importantes.La pequeña preponderancia."},
    63:{"desc":"Conclusiones.Después de la realización."},
    64:{"desc":"Inconcluso.Antes de la realización"}
}


const $div_dato_cuadro=document.getElementById("div_dato_cuadro")

// aparece la informacion del cuadro al momento de poner el cursor encima
const mostrarDato = (event) =>{
    // console.log(event.target.innerHTML) // otra forma
    let numero=event.target.getAttribute("id")
    let descripcion=datos[numero].desc

    $div_dato_cuadro.innerHTML=`<h3 id="numero">${numero}</h3>
                            <h4 id="desc">${descripcion}</h4>`

    // console.log(numero)
    // console.log(descripcion)
}

// se elimina la informacion al momento que se quita el cursor del cuadro
const limpiarDato = (event) => {
    const $numero=document.getElementById("numero")
    const $desc=document.getElementById("desc")
    $div_dato_cuadro.removeChild($numero)
    $div_dato_cuadro.removeChild($desc)
}

// se agregan los eventos a tlos cuadros de la tabla, los ids estan enumerados
for (let n = 1; n <= 64; n++) {
    document.getElementById(n).addEventListener("mouseover",mostrarDato)
    document.getElementById(n).addEventListener("mouseout",limpiarDato)
    
}

