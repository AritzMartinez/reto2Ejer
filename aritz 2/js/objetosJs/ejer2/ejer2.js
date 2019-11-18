window.onload = function () {
    let tipos = ["Ciencia ficcion", "Terror", "Animacion", "Comedia", "Historica", "Añadir tipo"];
    cargarTipos(tipos);

    function cargarTipos(tipos) {
        let selector = document.getElementById("selectTipo");

        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
        for (let i = 0; i < tipos.length; i++) {
            let option = document.createElement("option");
            let textNode = document.createTextNode(tipos[i]);
            option.appendChild(textNode);

            option.setAttribute("value", tipos[i]);
            selector.appendChild(option)
        }
    }

    document.getElementById("masautor").addEventListener("click", masautor);

    function masautor() {
        let divautores = document.getElementById("divautores");

        let autor = document.createElement("div");
        autor.setAttribute("class", "autor");

        let label1 = document.createElement("label");
        let labelText1 = document.createTextNode("Dni: ");
        label1.appendChild(labelText1);
        let input = document.createElement("input");
        label1.appendChild(input);

        let label2 = document.createElement("label");
        let labelText2 = document.createTextNode("Nombre completo: ");
        label2.appendChild(labelText2);
        let input2 = document.createElement("input");
        label2.appendChild(input2);

        // Añadirlos a la caja padre
        autor.appendChild(label1);
        autor.appendChild(label2);
        divautores.appendChild(autor);
    }

    document.getElementById("enviar").addEventListener("click", enviar);

    function enviar() {


        let titulo = document.getElementById("titulo").value;
        let isbn = document.getElementById("isbn").value;
        let tipo = document.getElementById("selectTipo").value;
        let numejemplares = document.getElementById("numejemplares").value;
        let disponible = "";
        if (document.getElementById('si').checked) {
            disponible = 'si';
        } else {
            disponible = 'no';
        }
        let fecha = document.getElementById("fecha").value;

        let arrayAutores = [];

        for (let i = 0; i < divautores.length; i++) {

            let dni = divautores[i].children[0].children[0].value;
            let nombreApellidos = divautores[i].children[1].children[0].value;

            let autor = new Autor(dni, nombreApellidos);
            arrayAutores.push(autor);
        }

        if(validacion(titulo,isbn,tipo,numejemplares,disponible,fecha,dni,numejemplares)==true){
            let libro = new Libro(titulo, isbn, tipo, numejemplares, disponible, fecha,arrayAutores);
            envioAjax(JSON.stringify(libro));

            document.getElementById('formulario').submit();
            console.log(libro);
        } else{
            alert("Ha ocurrido un problema con los datos del  formulario");
        }


    }

    function envioAjax(libro) {
        $.ajax({
            url: "#",
            data: libro,
            success: alert("Libro Enviado")

        });
    }

    document.getElementById("no").addEventListener("click", verFecha);

    function verFecha() {
        let fecha = document.getElementById('divfecha');
        fecha.setAttribute("style", "display: block;")
    }

    document.getElementById("si").addEventListener("click", ocultarFechat);

    function ocultarFechat() {
        let fecha = document.getElementById('divfecha');
        fecha.setAttribute("style", "display: none;")
    }

    function validacion(titulo,isbn,tipo,numejemplares,disponible,fecha,dni) {

        let validni = /[0-9]{8}[A-z]{1}/;
        let valifecha = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
        let valiisbn = /^(?:ISBN(?:-10)?:?●)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-●]){3})[-●0-9X]{13}$)[0-9]{1,5}[-●]?[0-9]+[-●]?[0-9]+[-●]?[0-9X]$/

        let msj = "";
        let vali = true;

        if (validni.exec(dni) == false) {
            // Si no se cumple la condicion...
            msj = "Introduce el dni \n";
            vali=false;
        }
        if (valifecha.exec(fecha) == false) {
            // Si no se cumple la condicion...
            msj = msj + "Introduce la fecha \n"
            vali=false;
        }
        if (valiisbn.exec(isbn) == false) {
            // Si no se cumple la condicion...
            msj = msj + "Introduce la segunda respuesta \n"
            vali=false;
        }
        if (titulo.length == "") {
            // Si no se cumple la condicion...
            msj = msj + "Introduce el titulo \n"
            vali=false;
        }
        if (tipo.length == "") {
            // Si no se cumple la condicion...
            msj = msj + "Introduce el tipo \n"
            vali=false;
        }
        if (numejemplares.length == "") {
            // Si no se cumple la condicion...
            msj = msj + "Introduce el numero de ejemplares \n"
            vali=false;
        }
        if (disponible.length == "") {
            // Si no se cumple la condicion...
            msj = msj + "Introduce la disponivilidad \n"
            vali=false;
        }
        if(msj != ""){
            alert(msj);
        }
        return vali;
    }


    function validar() {

        let validni = /[0-9]{8}[A-z]{1}/;
        let valifecha = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
        let valiisbn = /^(?:ISBN(?:-10)?:?●)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-●]){3})[-●0-9X]{13}$)[0-9]{1,5}[-●]?[0-9]+[-●]?[0-9]+[-●]?[0-9X]$/

        if(validni.exec(document.getElementById("dni").value) || document.getElementById("dni").value == "") {
            alert("Ingrese un dni valido");
            return false
        }else if(valifecha.exec( document.getElementById("fecha").value) || document.getElementById("fecha").value == "") {
            alert("Ingreses una fecha valida");
            return false
        }

        return true;
    }


};