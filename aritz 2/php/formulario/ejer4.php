<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<form action="ejer4.php" method="get">
    Usuario:
    <input type="text" name="usuario" required><br>
    Contraseña:
    <input type="password" name="contrasena" required><br>

    <input type="submit" value="Enviar">
</form>

<?php
if (isset($_GET["usuario"]) && isset($_GET["contrasena"])){

    $usuario = $_GET["usuario"];
    $contraseña = $_GET["contrasena"];




}

$usuarios = array(
    "user1" => array (
        "nombre" => ‘Ane’,
        "apellidos" => ‘López’,
        "password" => ‘123Abc’
    ),
    "user2" => array (
        "nombre" => ‘Amaia’,
        "apellidos" => ‘Otsoa’,
        "password" => ‘456Xyz’
    )
);

function recorre($array,$usu,$contra){
    foreach ($array as $usuario =>$detalles){
            if ($usu ==  usuario){

            }
        }foreach ($detalle as $indice => $valor){
            if ($contraseña ==$password){

            }
    }

}



?>

</body>
</html>