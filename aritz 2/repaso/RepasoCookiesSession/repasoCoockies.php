<?php


if (isset($_GET["accion"])) {
    $accion = $_GET["accion"];
    switch ($accion) {
        case 'insert':
            setcookie("txtCoockie", $_GET["texto"], time() + 60);
            break;
        case 'borrar':
            setcookie("txtCoockie", null, -1);
            break;
        case 'insertSelect':
            setcookie("selectCoockie", $_GET["idioma"], time() + 60);
            break;

    }
}

if (isset($_COOKIE["txtCoockie"])) {
    echo "<p>Usuario almacenado: " . $_COOKIE["txtCoockie"] . "</p>";
} else {
    echo "<p>No hay ningún usuario almacenado</p>";
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>


<form action="repasoCoockies.php" method="get">
    <label>Testo que quieres guardar en Coockies: </label><input type="text" name="texto">

    <input type="hidden" name="accion" value="insert">
    <input type="submit" value="Guardar">
</form>

<form action="repasoCoockies.php" method="get">
<select name="idioma">
    <option value="Euskera">Euskera</option>
    <option value="Castellano">Castellano</option>
</select>
<!--    input type=hidden name=accion values=insertSelect -->
<input type="hidden" name="accion" value="insertSelect">
<input type="submit" value="Guardar la select">
</form>

<a href="repasoCoockies.php?accion=borrar">Borrar Coockie</a>
</body>
</html>