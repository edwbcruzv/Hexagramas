

//arreglos de hexagramas
var line_values = [];
var line_values_left = [];
var line_values_right = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("diagram1").style.display = "none";
    document.getElementById("diagram3").style.display = "none";
});

function onFocusInput(e) {
    e.placeholder = '';
}

function onBlurInput(e) {
    e.placeholder = '2';
}

function random(){
    let num1 = document.getElementById("digit_1");
    let num2 = document.getElementById("digit_2");
    let num3 = document.getElementById("digit_3");
    let n1 = Math.floor(Math.random() * (4-2))+2
    let n2 = Math.floor(Math.random() * (4-2))+2
    let n3 = Math.floor(Math.random() * (4-2))+2

    num1.value = n1
    num2.value = n2
    num3.value = n3

    addLine()

    // num1.value = n1
    // num2.value = n2
    // num3.value = n3
}

function addLine() {
    var num1 = document.getElementById("digit_1");
    var num2 = document.getElementById("digit_2");
    var num3 = document.getElementById("digit_3");

    if ((num1.value.length == 0) || (num2.value.length == 0) || (num3.value.length == 0)) {
        alert("Debe llenar los tres campos.");
    } else {
        if (!(line_values.length == 6)) {
            var suma = parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value);
            line_values.push(suma);

            // Generar linea
            var linebreak = document.createElement("br");
            var linebreak_left = document.createElement("br");
            var linebreak_right = document.createElement("br");
            var content, left_content, right_content;
            switch (suma) {
                case 6:
                    console.log("Generando linea yin mutante ___x___ ...");
                    content = document.createTextNode("___x___");
                    //left hexagram content
                    left_content = document.createTextNode('___\u00A0\u00A0___');
                    line_values_left.push(8);
                    //right hexagram content
                    right_content = document.createTextNode("_______");
                    line_values_right.push(7);
                    break;
                case 7:
                    console.log("Generando linea yang _______ ...");
                    content = document.createTextNode("_______");
                    //left hexagram content
                    left_content = document.createTextNode("_______");
                    line_values_left.push(suma);
                    //right hexagram content
                    right_content = document.createTextNode("_______");
                    line_values_right.push(suma);
                    break;
                case 8:
                    console.log("Generando linea yin ___ ___ ...");
                    content = document.createTextNode('___\u00A0\u00A0___');
                    //left hexagram content
                    left_content = document.createTextNode('___\u00A0\u00A0___');
                    line_values_left.push(suma);
                    //right hexagram content
                    right_content = document.createTextNode('___\u00A0\u00A0___');
                    line_values_right.push(suma);
                    break;
                case 9:
                    console.log("Generando linea yang mutante ___o___ ...");
                    content = document.createTextNode("___o___");
                    //left hexagram content
                    left_content = document.createTextNode("_______");
                    line_values_left.push(7);
                    //right hexagram content
                    right_content = document.createTextNode('___\u00A0\u00A0___');
                    line_values_right.push(8);
                    break;
                default:
                    alert("Error al generar linea ):");
            }
            document.getElementById("dgm2").insertBefore(linebreak, document.getElementById("dgm2").firstChild);
            document.getElementById("dgm2").insertBefore(content, document.getElementById("dgm2").firstChild);

            document.getElementById("dgm1").insertBefore(linebreak_left, document.getElementById("dgm1").firstChild);
            document.getElementById("dgm1").insertBefore(left_content, document.getElementById("dgm1").firstChild);

            document.getElementById("dgm3").insertBefore(linebreak_right, document.getElementById("dgm3").firstChild);
            document.getElementById("dgm3").insertBefore(right_content, document.getElementById("dgm3").firstChild);

            resetInputs();
            console.log(line_values);
            console.log(line_values_left);
            console.log(line_values_right);

            showDescription(line_values, line_values_left, line_values_right);

        } else {
            alert("Un hexagrama solo puede contener 6 lineas.");
        }
    }

    if (line_values.length == 6) {
        // indexOf: El primer ??ndice del elemento en la matriz; -1 si no se encuentra.
        if (line_values.indexOf(6) != -1) {
            document.getElementById("diagram1").style.display = "block";
            document.getElementById("diagram3").style.display = "block";
        console.log("Mutant by 6 line value found.")    
        } else {
            if (line_values.indexOf(9) != -1) {
                document.getElementById("diagram1").style.display = "block";
                document.getElementById("diagram3").style.display = "block";    
            }
        console.log("Mutant by 9 line value found.");    
        }
    }else{
        document.getElementById("digit_1").focus();
    }
}

function showDescription(line_values, line_values_left, line_values_right) {
    if(line_values.length == 6) {
        if (line_values.indexOf(6) != -1 || line_values.indexOf(9) != -1) {

            var datos = getHexagramByValue(line_values_left);
            var datos2 = getHexagramById(datos.id);

            var datos3 = getHexagramByValue(line_values_right);
            var datos4 = getHexagramById(datos3.id);

            document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-1').innerHTML = datos2.id+". "+datos2.nombre;
            document.getElementById('diagram1-title').innerHTML = datos2.id+". "+datos2.nombre;
            document.getElementById('diagram2-title').innerHTML = "Hexagram";
            document.getElementById('hexagrama-descripcion-result-1').innerHTML = datos2.descripcion;

            document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-2').innerHTML = datos4.id+". "+datos4.nombre;
            document.getElementById('diagram3-title').innerHTML = datos4.id+". "+datos4.nombre;
            document.getElementById('hexagrama-descripcion-result-2').innerHTML = datos4.descripcion;

            selected(datos2.id, datos4.id);
        } else {
            var datos = getHexagramByValue(line_values);
            var datos2 = getHexagramById(datos.id);

            document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'inline-block';
            document.getElementById('hexagrama-descripcion-resultado-nombre-1').innerHTML = datos2.id+". "+datos2.nombre;
            document.getElementById('hexagrama-descripcion-result-1').innerHTML = datos2.descripcion;
            document.getElementById('diagram2-title').innerHTML = datos2.id+". "+datos2.nombre;
            document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';


            selected(datos2.id, 'NULL');
        }
    }
}

function selected(id, id2) {
    document.getElementById(id).style.backgroundColor = '#DC143C';
    document.getElementById(id).style.color= '#ffffff'
    document.getElementById(id2).style.backgroundColor = '#DC143C';
    document.getElementById(id2).style.color= '#ffffff'
}

function deselected(){
    for(var i=1;i<=64;i++){
        document.getElementById(i).style.backgroundColor = '#ffffff';
    }
    document.getElementById('diagram2-title').innerHTML = "Hexagram";
    document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';
}

function eraseLine() {
    if (line_values.length == 6) {
        document.getElementById("diagram1").style.display = "none";
        document.getElementById("diagram3").style.display = "none";
    }
    
    if (!(line_values.length == 0)) {
        line_values.pop();
        line_values_left.pop();
        line_values_right.pop();
        //Borrar linea
        console.log("Eliminando ultima linea...");
        var last_line, last_line_right, last_line_left;
        for (var i = 0; i < 2; i++) {
            last_line = document.getElementById("dgm2").firstChild;
            document.getElementById("dgm2").removeChild(last_line);
            last_line_left = document.getElementById("dgm1").firstChild;
            document.getElementById("dgm1").removeChild(last_line_left);
            last_line_right = document.getElementById("dgm3").firstChild;
            document.getElementById("dgm3").removeChild(last_line_right);

        }
        console.log(line_values);
        console.log(line_values_left);
        console.log(line_values_right);
    } else {
        alert("No hay contenido para borrar.");
    }
    document.getElementById("digit_1").focus();
    deselected();
}

function eraseHexagram() {
    resetInputs();
    document.getElementById("diagram1").style.display = "none";
    document.getElementById("diagram3").style.display = "none";

    var last_line, last_line_right, last_line_left;
    for (var i = 0; i < (line_values.length) * 2; i++) {
        last_line = document.getElementById("dgm2").firstChild;
        document.getElementById("dgm2").removeChild(last_line);
        last_line_left = document.getElementById("dgm1").firstChild;
        document.getElementById("dgm1").removeChild(last_line_left);
        last_line_right = document.getElementById("dgm3").firstChild;
        document.getElementById("dgm3").removeChild(last_line_right);
    }
    line_values = [];
    line_values_left = [];
    line_values_right = [];
    
    console.log("Borrando hexagrama...");
    console.log(line_values);
    console.log(line_values_left);
    console.log(line_values_right);
    document.getElementById("digit_1").focus();

    document.getElementById('hexagrama-descripcion-resultado-1').style.display = 'none';
    document.getElementById('hexagrama-descripcion-resultado-2').style.display = 'none';
    deselected();
}

function isValidNumber(e) {
    var keyCode = e.which ? e.which : e.keyCode;
    var isValid = ((keyCode >= 50 && keyCode <= 51));
    if (!isValid)
        alert("El valor introducido es inv??lido, solo son aceptados los valores '2' y '3'.");
    return isValid;
}

function resetInputs() {
    document.getElementById("digit_1").value = "";
    document.getElementById("digit_2").value = "";
    document.getElementById("digit_3").value = "";
}