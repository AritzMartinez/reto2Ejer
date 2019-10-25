
//Hacer visibel o invisibel el formulario (boton añadir)
function verFormulario(){
    let div = document.getElementById("divContacto");
    if (div.style.display == 'none'){
        div.style.display='block';
    }else {
        div.style.display='none';
    }


}

//Hacer visibel o invisibel el formulario (boton buscar)
function verBuscar(){

    let divBuscar = document.getElementById("divBuscar");
    if (divBuscar.style.display == 'none'){
        divBuscar.style.display='block';
    }else {
        divBuscar.style.display='none';
    }

}

//Añadir campo al formulario
function añadirCampo() {


    let formulario = document.getElementById("formuContacto");
    let p = document.createElement("p");
    let input = document.createElement("input");
    let pText = document.createTextNode("Holaa: ");

    p.appendChild(pText);
    p.appendChild(input);
    formulario.appendChild(p);

}

function cargarOrganizacion(){
    var array = ["Cantabria", "Asturias", "Galicia", "Andalucia", "Extremadura"];
    contacto.organizacion;
    var provincia = document.getElementById("provincia");
    for(var i=0;i<array.length;i++){
        provincia.options[i] = new option(array[i]);
    }
}