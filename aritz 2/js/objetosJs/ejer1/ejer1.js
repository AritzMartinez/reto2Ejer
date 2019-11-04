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
    for(let i=1;i<select.length;i++) {
        if(select.options[i].text==org) {
          return;
        }
    }
    select.add(option);


}

function enviar() {
    let nombre = document.getElementById("1").value;
    let organizacion = document.getElementById("2").value;
    let movil = document.getElementById("3").value;
    validar();
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
    if (nombuscar !="" && selected == "Selecciona la organizacion"){
        for (let i = 0; i < contactos.length; i++) {
            if (contactos[i].nombre == nombuscar) {
                imprimirPersona(contactos[i]);
            }
        }
    }else {
        for (let i = 0; i < contactos.length; i++) {
            if (contactos[i].organizacion == selected) {
               imprimirPersona(contactos[i]);
            }
        }
    }
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre == nombuscar && contactos[i].organizacion == selected) {
            imprimirPersona(contactos[i]);
            break;
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



function validar() {
    let valiNombre = /^[A-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let valiMovil =  /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

    if(valiNombre.exec(document.getElementById("1").value) || document.getElementById("1").value == "") {
        alert("Ingrese un nombre valido");
        return false
    }else if(valiMovil.exec( document.getElementById("3").value) || document.getElementById("3").value == "") {
        alert("Ingreses un movil valido");
        return false
    }
    return true;
}

/*  Mejoras
* Problemas con la validacion del movil.
* Resetear el campo añadido despues de envair un contacto.
* Salir en el for return sobra.
* for{
*   if{
*       return;
*   }
* }
* numPersona++ = push
*El for de buscar con el break;
*try
*/
