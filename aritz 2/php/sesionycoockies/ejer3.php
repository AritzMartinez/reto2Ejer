<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer3.php" method="get">

    Introduce el texto que deseas almacenar:
    <select name="idioma">
        <option value="Castellano">Castellano</option>
        <option value="Euskera">Euskera</option>
    </select><br>
    <input type="submit" value="Guardar">
</form>
Idioma:

<?php

if (isset($_GET["idioma"])){
    $idioma = $_GET["idioma"];
    guardarCoockie($idioma);

}

function guardarCoockie($texto){
    setcookie("idioma",$texto,time() + 30);
}


?>

</body>
</html>