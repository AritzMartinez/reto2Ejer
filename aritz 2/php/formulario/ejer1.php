<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer1.php" method="get">

    Introduce la temperatura:
    <input type="text" name="temperatura"><br>
    Indica la unidad de temperatura introducida
    <select name="unidad">
        <option value="Celsius">Celsius</option>
        <option value="Farenheit">Farenheit</option>
    </select><br>

    <input type="submit" value="Enviar">
</form>
Resultado de la conversion

<?php

if (isset($_GET["temperatura"]) && isset($_GET["unidad"])){
    $temperatura = $_GET["temperatura"];
    $unidad = $_GET["unidad"];


    echo convertir($temperatura,$unidad);
}


function convertir ($tem,$uni){
    if ($uni == "Celsius"){
        return $temperatura = $tem *9/5 +32;
    }else{
        return $temperatura = ($tem - 32) * 5/9;
    }
}


?>

</body>
</html>