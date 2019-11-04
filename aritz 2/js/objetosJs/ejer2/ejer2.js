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

function enviar() {
    let nombreApellido = document.getElementById("nombreapellidos").value;
    let dni = document.getElementById("dni").value;


    console.log("alfo")
    autor[posiAutor] = new Autor(dni,nombreApellido);
    posiAutor++;
    console.log(autor);
    limpiarCampos();
}

function limpiarCampos() {

    document.getElementById("dni").value = "";
    document.getElementById("nombreapellidos").value = "";
}


/*let titulo = document.getElementById("titulo").value;
let isbn = document.getElementById("isbn").value;
let dni = document.getElementById("dni").value;
let nombre = document.getElementById("nombre").value;
let numEjemplares = document.getElementById("numEjemplares").value;
/!*let disponible = document.getElementById("disponible").value;*!/
let fechaDisponoble = document.getElementById("fechaDisponoble").value;*/
