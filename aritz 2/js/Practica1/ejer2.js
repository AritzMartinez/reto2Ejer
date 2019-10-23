function añadir() {

    let lista = document.getElementById("lista");
    let elemento =document.createElement("li");
    let liText = document.createTextNode("b");

elemento.appendChild(liText);
document.body.appendChild(elemento);

lista.appendChild(elemento)



}