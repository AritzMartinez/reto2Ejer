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

if (isset($_GET["usuario"]) && isset($_GET["contrasena"])){

    $usuario = $_GET["usuario"];
    $contraseña = $_GET["contrasena"];
    echo validarLogin($usuario,$contraseña,$usuarios);

}

function validarLogin ($user, $contra, $array){
    $nombre = "";
    $apellido = "";
    foreach ($array as $key =>$value){
        if ($key == $user){
            foreach ($value as $key => $valor) {
                if ($key == "nombre"){
                    $nombre = $valor;
                }elseif ($key == "apellido"){
                    $apellido = $valor;
                }elseif ($key == "contrasena"){
                    if ($valor == $contra){
                        return "Hola, {$nombre} {$apellido}";
                    }else{
                        return "La cotraseña es incorrecta. Pruebe de nuevo";
                    }
                }
            }
        }
    }
}
?>

</body>
</html>