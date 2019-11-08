let libros = [];
let posiLibro = 0;
let autor = [];
let posiAutor = 0;

function myOnLoad() {
    cargarTipoLIbro()
}

function cargarTipoLIbro() {
    let tipos = ["Ciencia ficcion", "Terror", "Animacion", "Comedia", "Historica", "Añadir tipo"];
    let idselect = document.getElementById("select")
    for (value in tipos) {
        var option = document.createElement("option");
        option.text = tipos[value];
        idselect.add(option);
    }
}
let contador = 4;
function masAutores() {

    let nombre1 = document.getElementById("nombre1");
    let p = document.createElement("p")
    p.id = "dni" + contador;
    let labelText = document.createTextNode("Final ");

    //Inseto en el body el div
    document.body.appendChild(nombre1);
    //Añado el texto al elemento label
    label.appendChild(labelText);
    //Inserto el label en le body
    document.body.appendChild(label);
    //Inserto en el div el label
    formu.appendChild(label);



    let nomCampo = prompt("Nombre del campo");

    let divautores = document.getElementById("autores");
    let p = document.createElement("p");
    p.id = "dni" + contador;
    let input = document.createElement("input");
    input.id = contador;
    let pText = document.createTextNode("Dni" + ": ");

    p.appendChild(pText);
    p.appendChild(input);
    divautores.appendChild(p);
    contador++;

  /*  let formulario = document.getElementById("formuLibro");
    let p = document.createElement("p");
    p.id = "p" + contador;
    let input = document.createElement("input");
    input.id = contador;
    let pText = document.createTextNode(nomCampo + ": ");

    p.appendChild(pText);
    p.appendChild(input);
    formulario.appendChild(p);
    contador++;*/



}

function limpiarCampos() {


}


/*let titulo = document.getElementById("titulo").value;
let isbn = document.getElementById("isbn").value;
let dni = document.getElementById("dni").value;
let nombre = document.getElementById("nombre").value;
let numEjemplares = document.getElementById("numEjemplares").value;
/!*let disponible = document.getElementById("disponible").value;*!/
let fechaDisponoble = document.getElementById("fechaDisponoble").value;*/
