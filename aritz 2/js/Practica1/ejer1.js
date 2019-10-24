window.onload = function() {
    var info = document.getElementById("informacion");
    var enlaces = document.getElementsByTagName("a");
    alert(enlaces.length);
    info.innerHTML = "Num enlaces = " + enlaces.length;
    var mensaje = "Direccion penultimo enlace: "+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;
    var contador = 0;
    for(var i=0; i<enlaces.length; i++) {
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer parrafo = "+enlaces.length;
}