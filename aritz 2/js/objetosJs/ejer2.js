let libros = [];
let posiLibro = 0;
function myOnLoad() {
    cargarTipoLIbro()
}

function cargarTipoLIbro() {
    let  tipos = ["Ciencia ficcion","Terror","Animacion","Comedia","Historica","Añadir tipo"];
    let idselect = document.getElementById("select")
    for (value in tipos) {
        var option = document.createElement("option");
        option.text = tipos[value];
        idselect.add(option);
    }
}

function enviar(){
    let titulo = document.getElementById("titulo").value;
    let isbn = document.getElementById("isbn").value;
    let tipo = document.getElementById("tipoLibro").value;
    let numEjemplares = document.getElementById("numEjemplares").value;
    let disponible = document.getElementById("disponible").value;
    let fechaDisponoble = document.getElementById("fechaDisponoble").value
    libros[posiLibro] = new Libro(titulo,isbn,tipo,numEjemplares,disponible,fechaDisponoble );
    posiLibro++;



}
let titulo = document.getElementById("titulo").value;
let isbn = document.getElementById("isbn").value;
let dni = document.getElementById("dni").value;
let nombre = document.getElementById("nombre").value;
let numEjemplares = document.getElementById("numEjemplares").value;
/*let disponible = document.getElementById("disponible").value;*/
let fechaDisponoble = document.getElementById("fechaDisponoble").value;
