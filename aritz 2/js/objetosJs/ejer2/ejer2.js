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


        let validni = /[0-9]{8}[A-z]{1}/;
        let valinum = /[0-9]/;
        let valifecha = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

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

        let libro = new objLibro(titulo, isbn, tipo, autores, numejemplares, disponible, fecha);
        envioAjax(JSON.stringify(libro));
        // hacer submit al formulario
        document.getElementById('formulario').submit();


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

    function comprobarExpresionRegular(texto, expresion) {
        if (expresion.test(texto)) {
            return texto;
        } else {
            throw texto;
        }
    }

    function validar() {
        let valitexto = /[A-z]/;
        let validni = /[0-9]{8}[A-z]{1}/;
        let valinum = /[0-9]/;
        let valifecha = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

        if (valiNombre.exec(document.getElementById("1").value) || document.getElementById("1").value == "") {
            alert("Ingrese un nombre valido");
            return false
        } else if (valiMovil.exec(document.getElementById("3").value) || document.getElementById("3").value == "") {
            alert("Ingreses un movil valido");
            return false
        }
        return true;
    }


};