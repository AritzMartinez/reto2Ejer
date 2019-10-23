window.onload = function () {
//Creas el elemeto h1 y introduces el texto en h1
let heading = document.createElement("h1");
let headingText = document.createTextNode("El texto de head");

//Añado un texto al elemnto h1
heading.appendChild(headingText);
//Inserto el h1 en el body
document.body.appendChild(heading);

//1.Creas el elemto div
//2.Dentro creas un label
//3.Dentro del label añades el texto
let div = document.createElement("div");
let label = document.createElement("label")
let labelText = document.createTextNode("Nombre");

//Inseto en el body el div
document.body.appendChild(div);

//Añado el texto al elemento label
label.appendChild(labelText);
//Inserto el label en le body
document.body.appendChild(label);

//Inserto en el div el label
div.appendChild(label);



// Crear nodo de tipo Element
let parrafo = document.createElement ("p");
// Crear nodo de tipo Text
let contenido = document.createTextNode ("Hola Mundo!");

// A˜nadir el nodo Text como hijo del nodo Element
parrafo.appendChild ( contenido );
// A˜nadir el nodo Element como hijo de la pagina
document.body. appendChild (parrafo);





}