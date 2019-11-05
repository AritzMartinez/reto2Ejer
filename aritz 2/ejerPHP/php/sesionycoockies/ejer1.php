<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer1.php" method="get">

    Introduce el texto que deseas almacenar:
    <input type="text" name="texto"><br>

    <input type="submit" value="Enviar">
</form>
No hay ningun usuario almacenado:

<?php
if (isset($_GET["texto"])){
    $texto = $_GET["texto"];

    guardarCoockie($texto);
    accederCookie();


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