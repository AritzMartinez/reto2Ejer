preguntas = [];
numpregunta =0;
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

    let rad = document.getElementsByName("rad");
    let checked =0;
    for (let i = 0; i <rad.length ; i++) {
        if (rad[i].children){
            checked = rad[i].value;
        }
    }

    preguntas[numpregunta] = new Preguntas(pregunta, respuesta1,respuesta2,respuesta3,respuesta4,checked);
    numpregunta++;
    console.log(preguntas);
    limpiarCamposPregun();


}
function limpiarCamposPregun() {
    let pregunta = document.getElementById("pregunta").value="";

    let respuesta1 = document.getElementById("respu1").value="";
    let respuesta2 = document.getElementById("respu2").value="";
    let respuesta3 = document.getElementById("respu3").value="";
    let respuesta4 = document.getElementById("respu4").value="";
}