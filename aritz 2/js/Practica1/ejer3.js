
function añadir(){

    let formu = document.getElementById("formu");
    let label = document.createElement("label");
    let labelText = document.createTextNode("Nombre");

    //Inseto en el body el div
  document.body.appendChild(formu);

//Añado el texto al elemento label
    label.appendChild(labelText);
//Inserto el label en le body
   document.body.appendChild(label);
//Inserto en el div el label
    formu.appendChild(label);

}

function borrar() {
    let formu = document.getElementById("formu");
    formu.removeChild(formu.firstChild);
}

function añadirFinal() {

}

function borrarFinal() {
    let formu = document.getElementById("formu");
    formu.removeChild(formu.lastChild);
}

function añadirMedio(posicion) {
    let form = document.getElementById("formu");
    let label = document.createElement("label")
    let labelText = document.createTextNode("Nombre");

    document.body.appendChild(form);

    label.appendChild(labelText)
    form.appendChild(form.childNodes[posicion])

}
function borrarMedio(posicion) {
    let form = document.getElementById("formu");
    form.removeChild(form.childNodes[posicion]);
}
