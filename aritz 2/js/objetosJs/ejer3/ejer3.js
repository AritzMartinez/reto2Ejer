preguntas = [];
numpregunta = 0;
contador = 0;

function verPreguntas() {
    let div = document.getElementById("divPreguntas");
    if (div.style.display == 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

function enviar() {
    let pregunta = document.getElementById("pregunta").value;

    let respuesta1 = document.getElementById("respu1").value;
    let respuesta2 = document.getElementById("respu2").value;
    let respuesta3 = document.getElementById("respu3").value;
    let respuesta4 = document.getElementById("respu4").value;

    let rad = $('input[name="rad"]:checked').val();

    console.log("algo");
    console.log(rad);

    if (validacion(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, rad) == true) {
        preguntas[numpregunta] = new Preguntas(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, rad);
        numpregunta++;
        console.log(preguntas);
        limpiarCamposPregun();
    } else {
        alert("Ha ocurrido un problema con los datos del  formulario");
    }
    /*
        preguntas[numpregunta] = new Preguntas(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, rad);
    */


}

function limpiarCamposPregun() {
    let pregunta = document.getElementById("pregunta").value = "";

    let respuesta1 = document.getElementById("respu1").value = "";
    let respuesta2 = document.getElementById("respu2").value = "";
    let respuesta3 = document.getElementById("respu3").value = "";
    let respuesta4 = document.getElementById("respu4").value = "";
}


function generarExamen(preguntas) {

    let divBoton = document.getElementById('botones');
    divBoton.style.display = 'block';

    verPregunta();

}

function verPregunta() {

    let pregunta1 = preguntas[contador].pregunta;
    console.log(pregunta1);

    let divexamen = document.getElementById("examen");

    let divPregunta = document.createElement("p");
    let ptext = document.createTextNode(pregunta1);
    divPregunta.appendChild(ptext);
    divexamen.appendChild(divPregunta);

    generarSelect();

    contador++;

}

function generarSelect() {

    let respu1 = preguntas[contador].respuesta1;
    let respu2 = preguntas[contador].respuesta2;
    let respu3 = preguntas[contador].respuesta3;
    let respu4 = preguntas[contador].respuesta4;

    let x = document.createElement("SELECT");
    x.setAttribute("id", "mySelect " + contador);
    document.body.appendChild(x);

    let z1 = document.createElement("option");
    z1.setAttribute("value", "1");
    let r1 = document.createTextNode(respu1);
    z1.appendChild(r1);

    let z2 = document.createElement("option");
    z2.setAttribute("value", "2");
    let r2 = document.createTextNode(respu2);
    z2.appendChild(r2);

    let z3 = document.createElement("option");
    z3.setAttribute("value", "3");
    let r3 = document.createTextNode(respu3);
    z3.appendChild(r3);

    let z4 = document.createElement("option");
    z4.setAttribute("value", "4");
    let r4 = document.createTextNode(respu4);
    z4.appendChild(r4);

    document.getElementById("mySelect " + contador).appendChild(z1);
    document.getElementById("mySelect " + contador).appendChild(z2);
    document.getElementById("mySelect " + contador).appendChild(z3);
    document.getElementById("mySelect " + contador).appendChild(z4);


    /* let select = document.getElementById("mySelect " + contador+1);
     select.style.visibility = 'hidden';*/


}

function nota() {
    let nota = 0;
    for (let i = 0; i < preguntas.length; i++) {
        let resp1 = document.getElementById("mySelect " + i).value;
        console.log(resp1);
        let resPregunta = preguntas[i].correcta;
        console.log(resPregunta);
        if (resp1 == resPregunta) {
            nota++;
        } else {
            nota--;
        }
    }
    console.log(nota);
    return nota;

}

function validacion(pregu, respu1, respu2, respu3, respu4, rad) {
    let msj = "";
    let vali = true;
    console.log(pregu);
    if (pregu.length == "") {
        // Si no se cumple la condicion...
        msj = "Introduce una pregunta \n";
        vali=false;
    }
    if (respu1.length == "") {
        // Si no se cumple la condicion...
        msj = msj + "Introduce la primera respuesta \n"
        vali=false;
    }
    if (respu2.length == "") {
        // Si no se cumple la condicion...
        msj = msj + "Introduce la segunda respuesta \n"
        vali=false;
    }
    if (respu3.length == "") {
        // Si no se cumple la condicion...
        msj = msj + "Introduce la tercera respuesta \n"
        vali=false;
    }
    if (respu4.length == "") {
        // Si no se cumple la condicion...
        msj = msj + "Introduce la cuarta respuesta \n"
        vali=false;
    }
    if (rad == undefined) {
        // Si no se cumple la condicion...
        msj = msj + "Selecciona la respuesta correcta \n"
        vali=false;
    }
    if(msj != ""){
        alert(msj);
    }
    return vali;
}