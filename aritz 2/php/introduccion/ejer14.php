<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<?php
$agenda = array
(
    array("Amaia","Gorbeia Jainaga",945010101,"agobea@ga.com"),
    array("Ane","Larrain Ogeta",945010101,"alarrain@ga.com"),
    array("Maite","Murgiondo Lekue",945010101,"mmurgio@ga.com"),
    array("Lorea","Aranceta Otxoa",945010101,"laran@ga.com"),
    array("Juan ","Algo Otro ",545010101," juaalgo@ga.com")
);

$tamaño = count($agenda);
echo $tamaño;
$i=0;
$valores = count($agenda[$i]);
echo $valores;
echo "<br>";

$i=0;
$x=0;

while ($i<$tamaño){

    {

        $x++;
    }

    $i++;
}

do{
    $x=0;
    do{
        echo $agenda[$i][$x];
        echo "<br>";
    }while ($x<$valores);
    echo "<br>";
}while($i<$tamaño);





?>

</body>
</html>
