<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer2.php" method="get">

    Introduce el texto que deseas almacenar:
    <input type="text" name="texto"><br>

    <input type="submit" value="Enviar">
    <input type="reset" value="Borrar" >
</form>
No hay ningun usuario almacenado:

<?php
function borraCoockie(){
    setcookie("usuario", NULL, -1);
}
if (isset($_GET["texto"])){
    $texto = $_GET["texto"];
    guardarCoockie($texto);
    accederCookie();
    borrarCookie();

}
function guardarCoockie($texto){
    setcookie("usuario",$texto);
}
function accederCookie(){
    $usuario = $_COOKIE['usuario'];
    echo $usuario;
}



?>

</body>
</html>
