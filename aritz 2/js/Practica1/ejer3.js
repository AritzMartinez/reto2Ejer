//principio
function añadir() {
    let formu = document.getElementById("formu");
    let label = document.createElement("label")
    let labelText = document.createTextNode("Principio ");
    let label1 = document.getElementsByTagName("label");
    //Inseto en el body el div
    document.body.appendChild(formu);
    //Añado el texto al elemento label
    label.appendChild(labelText);
    if (label1.length == 0) {
        formu.insertBefore(label, null);
    } else {
        formu.insertBefore(label, label1[0]);
    }

}

function borrar() {
    let formu = document.getElementById("formu");
    formu.removeChild(formu.firstChild);
}

//medio
function añadirMedio() {
    let numLabel = document.getElementsByTagName("label");
    let medio = Math.round(numLabel.length / 2);
    console.log(numLabel.length);
    console.log(medio);

    let formu = document.getElementById("formu");
    let label = document.createElement("label")
    let labelText = document.createTextNode("Medio ");

    //Inseto en el body el div
    document.body.appendChild(formu);
    //Añado el texto al elemento label
    label.appendChild(labelText);
    //Inserto en el div el label
    if (medio == 0) {
        formu.insertBefore(label, null);
    } else {
        formu.insertBefore(label, numLabel[medio]);
    }
}

function borrarMedio() {
    let form = document.getElementById("formu");
    form.removeChild(form.childNodes[posicion]);
}

//final
function añadirFinal() {
    let formu = document.getElementById("formu");
    let label = document.createElement("label");
    let labelText = document.createTextNode("Final ");

    //Inseto en el body el div
    document.body.appendChild(formu);
    //Añado el texto al elemento label
    label.appendChild(labelText);
    //Inserto el label en le body
    document.body.appendChild(label);
    //Inserto en el div el label
    formu.appendChild(label);
}

function borrarFinal() {
    let formu = document.getElementById("formu");
    formu.removeChild(formu.lastChild);
}