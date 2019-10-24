function arbolDeNodos() {
    let objetoHTML = document.documentElement;
    alert("El elemento padre es: "+objetoHTML.nodeName);
    let objetoHead = objetoHTML.firstChild;
    let objetoBody = objetoHTML.lastChild;
    alert("Los elementos debajo del padre son: " + objetoHead.nodeName + " y " + objetoBody.nodeName);

    hijos(objetoHead)

    hijos(objetoBody)
}

function hijos(valorNodo) {
    let msj = "Los objetos dentro de "+ valorNodo.nodeName + " son: ";
    for (let i = 0; i < valorNodo.children.length; i++) {
        msj += valorNodo.children[i].nodeName + " ";
    }
    alert(msj);
    for (let i = 0; i < valorNodo.children.length; i++) {
        if (valorNodo.children[i].hasChildNodes()) {
            hijos(valorNodo.children[i])
        }
    }
}
