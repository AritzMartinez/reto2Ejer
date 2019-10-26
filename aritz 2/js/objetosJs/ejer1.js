let contactos =[];
let numPersona =0;

//Hacer visibel o invisibel el formulario (boton añadir)
function verFormulario(){
    let div = document.getElementById("divContacto");
    if (div.style.display == 'none'){
        div.style.display='block';
    }else {
        div.style.display='none';
    }


}

//Hacer visibel o invisibel el formulario (boton buscar)
function verBuscar(){

    let divBuscar = document.getElementById("divBuscar");
    if (divBuscar.style.display == 'none'){
        divBuscar.style.display='block';
    }else {
        divBuscar.style.display='none';
    }

}
let contador=4;
//Añadir campo al formulario
function añadirCampo() {
    let nomCampo = prompt("Nombre del campo");
    /*
    let tipoDatos = prompt("Nombre del campo");
    */
/*
    Object.defineProperty(contacto, 'nomCampo');
*/

    let formulario = document.getElementById("formuContacto");
    let p = document.createElement("p");
    let input = document.createElement("input");
    input.id=contador;
    let pText = document.createTextNode(nomCampo + ": ");

    Object.defineProperty(Persona, nomCampo, { value: 1 });
    p.appendChild(pText);
    p.appendChild(input);
    formulario.appendChild(p);
    contador++;
    console.log(contactos);
}

function cargarOrganizacion(){
   /* var array = ["Cantabria", "Asturias", "Galicia", "Andalucia", "Extremadura"];
    contacto.organizacion;
    var provincia = document.getElementById("provincia");
    for(var i=0;i<array.length;i++){
        provincia.options[i] = new option(array[i]);
    }*/
}

function enviar() {

    let nombre = document.getElementById("1").value;
    let organizacion = document.getElementById("2").value;
    let movil = document.getElementById("3").value;
    let per = new Persona(nombre,organizacion,movil);
    per.setAttribute("Email","2");
    contactos[numPersona]=per;
    numPersona++;
    console.log(contactos);
    limpiarCampos();

}
function limpiarCampos() {
    for (let i = 1; i <contador ; i++) {
        document.getElementById(i).value="";
    }

}