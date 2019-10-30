<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer4.php" method="get">
    <ul>

    </ul>
    Añadir asistencia:
    <input type="text" name="texto"><br>
    <input type="submit" value="Guardar">
</form>
Idioma:

<?php

if (isset($_GET["idioma"])){
    $idioma = $_GET["idioma"];
    guardarCoockie($idioma);

}
sess
?>

</body>
</html>