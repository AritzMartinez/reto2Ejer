let contactos = [];
let numPersona = 0;

//Hacer visibel o invisibel el formulario (boton añadir)
function verFormulario() {
    let div = document.getElementById("divContacto");
    if (div.style.display == 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

//Hacer visibel o invisibel el formulario (boton buscar)
function verBuscar() {
    let divBuscar = document.getElementById("divBuscar");
    if (divBuscar.style.display == 'none') {
        divBuscar.style.display = 'block';
    } else {
        divBuscar.style.display = 'none';
    }
}

let contador = 4;

//Añadir campo al formulario
function añadirCampo() {
    let nomCampo = prompt("Nombre del campo");

    let formulario = document.getElementById("formuContacto");
    let p = document.createElement("p");
    p.id = "p" + contador;
    let input = document.createElement("input");
    input.id = contador;
    let pText = document.createTextNode(nomCampo + ": ");

    p.appendChild(pText);
    p.appendChild(input);
    formulario.appendChild(p);
    contador++;
    console.log(contactos);
}

function cargarOrganizacion(org) {
    contactos.sort();
    let select = document.getElementById("check");

    let option = document.createElement("option");
    option.text = org;

    select.add(option);
}

function enviar() {
    let nombre = document.getElementById("1").value;
    let organizacion = document.getElementById("2").value;
    let movil = document.getElementById("3").value;
    let campos = [];

    for (let i = 4; i < contador; i++) {
        campos[i - 4] = document.getElementById(i).value;
    }

    contactos[numPersona] = new Persona(nombre, organizacion, movil, campos);
    numPersona++;
    console.log(contactos);
    cargarOrganizacion(organizacion);
    limpiarCampos();
}

function buscar() {
    let nombuscar = document.getElementById("1buscar").value;
    let combo = document.getElementById("check");
    let selected = combo.options[combo.selectedIndex].text;

    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre == nombuscar && contactos[i].organizacion == selected) {
            imprimirPersona(contactos[i]);
            break;
        }
    }

    if (nombuscar == ""){
        for(let i = 0; i < contactos.length; i++){

        }
    }
}

function imprimirPersona(persona) {
    let msj = "**** Datos de la persona ****" +"\n";
    msj = msj + "Nombre: " + persona.nombre + "\n";
    msj = msj + "Organizacion: " + persona.organizacion + "\n";
    msj = msj + "Movil: " + persona.movil + "\n";
    for (let i = 0; i < persona.campos.length; i++) {
        let pos = 4 + i;
        msj = msj + document.getElementById("p" + pos).innerText;
        msj = msj + persona.campos[i] + "\n";
    }
    alert(msj);
}

function limpiarCampos() {
    for (let i = 1; i < contador; i++) {
        document.getElementById(i).value = "";
    }
}


//Buscar:
//puede buscar solo por nombre
//puede buscar solo por organizacion

//Cuando carga la organizacion solo cargue las distintas organizaciones.
//Validaciones
/*
function validarMovil(){
    if(/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/i.test(telefono.value))) {
        alert("Ingrese un Tel\u00E9fono v\u00e1lido");
        telefono.style.borderColor = "red";
        lbltelefono.style.color = "red";
        return false;
    }
}

function validarNombre(){
    if(/^[a-z0-9_-]{3,16}$/i.test(telefono.value))) {
        alert("Ingrese un Tel\u00E9fono v\u00e1lido");
        telefono.style.borderColor = "red";
        lbltelefono.style.color = "red";
        return false;
    }
}

function validarEmail(){
    if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(telefono.value))) {
        alert("Ingrese un Tel\u00E9fono v\u00e1lido");
        telefono.style.borderColor = "red";
        lbltelefono.style.color = "red";
        return false;
    }
}


*/
