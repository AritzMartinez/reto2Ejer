<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer5.php" method="get">
   <p>
    Usuario
    <input type="text" name="usu">
   </p>
    <p>
    Constraseña
    <input type="text" name="contra">
    </p>
    <input type="submit" value="Guardar">
</form>
</body>
<?php
session_start();
$usuarios = array(
    "usua1" => array(
        "nombre" => "a",
        "contraseña" => "a"
    ),
    "usua2" => array(
        "nombre" => "b",
        "contraseña" => "b"
    )
);
$_SESSION["usua1"] = "a";
$_SESSION["usua2"] = "b";

function comprobarUsuario($usu, $contra){
    if ($_SESSION[$usu] == $contra){
        $_SESSION["msj"] = "Hola ".$usu;
    }
}
if (isset($_GET["usu"]) && isset($_GET["contra"])){
    comprobarUsuario($_GET["usu"], $_GET["contra"], $usuarios);
}
?>

</html>