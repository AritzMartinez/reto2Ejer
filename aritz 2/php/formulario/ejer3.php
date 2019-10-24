<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer3.php" method="get">

    Introduce tu numero:
    <input type="text" name="numero" required><br>

    <input type="submit" value="Enviar">

</form>
El numero aparece

<?php


if (isset($_GET["numero"])) {

    $numero = $_GET["numero"];

    echo generaComprueba($numero);

}

function generaComprueba($num1)
{

    $array = array();
    for ($i = 0; $i <= 20; $i++) {
        array_push($array, random_int(1, 10));
    }

    $resultado = 0;

    foreach ($array as $numaleat) {
        if ($num1 == $numaleat) {
            $resultado++;
        }
    }
    return $resultado;

}


?>

</body>
</html>
