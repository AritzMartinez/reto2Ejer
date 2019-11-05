<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer2.php" method="get">

    Primer numero:
    <input type="text" name="primerNum" required><br>
    Segundo numero:
    <input type="text" name="segundoNum" required><br>
    Seleccione la operacion:
    <select name="operador">
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplica">Mutiplicar</option>
        <option value="divide">Dividir</option>
    </select><br>

    <input type="submit" value="Enviar">
</form>
Calculadora

<?php
if (isset($_GET["primerNum"]) && isset($_GET["segundoNum"]) && isset($_GET["operador"])){

    $primerNum = $_GET["primerNum"];
    $segundoNum = $_GET["segundoNum"];
    $operador = $_GET["operador"];

    echo operacion($primerNum,$segundoNum,$operador);

}

function operacion ($num1,$num2,$ope){

    switch ($ope){
        case "suma":
            return $resultado = $num1 + $num2;
            break;
        case "resta":
            return $resultado = $num1 - $num2;
            break;
        case "multiplica":
            return $resultado = $num1 * $num2;
            break;
        case "divide":
            return $resultado = $num1 / $num2;
            break;
    }

}


?>

</body>
</html>