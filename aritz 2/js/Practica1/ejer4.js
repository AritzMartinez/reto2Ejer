function verNodos() {
    let objetHtml = document.documentElement;

    console.log("Padre: " + objetHtml.nodeName);
    let objetHead = objetHtml.firstChild;
    let objetBody = objetHtml.lastChild;

    console.log("Hijos de html :" + objetHead.nodeName + objetBody.nodeName);

    hijos(objetHead)
    hijos(objetBody)
}
function hijos(nodo) {
    let cadena = "nodos dentro de "+ nodo.nodeName + " : ";
    console.log("Hijos de nodo: " + nodo.nodeName);
    for (let i = 0; i < nodo.children.length; i++) {
        cadena += nodo.children[i].nodeName + " ";
    }
    console.log(cadena);
    for (let i = 0; i < nodo.children.length; i++) {
        if (nodo.children[i].hasChildNodes()) {
            hijos(nodo.children[i])
        }
    }
}
