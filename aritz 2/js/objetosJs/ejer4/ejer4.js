contador = 0;

function arrayAleatorio() {
    var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    lista = lista.sort(function () {
        return Math.random() - 0.5
    });

    for (let i = 0; i < lista.length; i++) {
        /*console.log(lista[i]);*/
        let btn1 = document.getElementById("btn" + i);
        btn1.setAttribute("value", lista[i])
        btn1.setAttribute("onclick", "numero('" + lista[i] + "')");
    }
}

function numero(x) {
    console.log(x);
    document.getElementById("clave").value += x;
}

function llenarCuentas() {
    let arrayCuentas = [];

    let cuen = new Cuentas();
    cuen.numcuenta = "123456256436";
    cuen.fecha = "21-11/2019";
    cuen.concepto = "algo";
    cuen.importe = "123";
    cuen.saldo = "12345";

    arrayCuentas.push(cuen);
    console.log(cuen);

    let usu = new Usuario();

    usu.dni = "12345678Y"
    usu.contraseña = "123";
    usu.cuentas = cuen;
    console.log(usu);

    return usu;
}

function enviar() {
    let arrayCuentas = [];

    let cuen = new Cuentas();
    cuen.numcuenta = "123456256436";
    cuen.fecha = "21-11/2019";
    cuen.concepto = "algo";
    cuen.importe = "123";
    cuen.saldo = "12345";

    arrayCuentas.push(cuen);
    console.log(cuen);

    let usu = new Usuario();

    usu.dni = "12345678Y"
    usu.contraseña = "123456";
    usu.cuentas = cuen;
    console.log(usu);


    let dni = document.getElementById("dni").value;
    let cla = document.getElementById("clave").value;
    console.log(dni);
    console.log(cla);
    /*pantalla.innerHTML=*/
    /*
     $["#dni"].val();
     $["#clave"].val();
     */

    if (dni == usu.dni && cla == usu.contraseña) {
        alert("Usuario y contraseña correctas");

        var url = "http://localhost:63342/aritz%202/js/objetosJs/ejer4/emergente.html?_ijt=ctbfmbenc0kufra07f0eapveao"
        abrirEnPestana(url);


    } else {
        alert("Error en el login");
    }

}

function abrirEnPestana(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}

