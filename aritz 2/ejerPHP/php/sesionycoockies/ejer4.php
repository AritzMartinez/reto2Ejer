<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<?php
session_start();

function borrarSesion(){
    session_unset();
    $_SESSION["contador"] = 0;
}
function guardarPersonaSesion($persona){
    $_SESSION["asistencia"] = $persona;
}
?>

<ul>
    <?php echo "Nombre del asistente".$_SESSION["asistencia"]?>
</ul>

<form action="ejer4.php" method="get">
    <p>Asistencia</p>
    <input type="text" name="persona">
    <input type="submit" value="Añadir" onclick="añadirPersonas()">
</form>
<input type="button" value="Borrar"onclick="borrarSesion()">
</body>
</html>