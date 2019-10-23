<html>
<head>
    <title>Hola Mundo PHP</title>
    <style type="text/css">
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>

<?php
$agenda = array
(
    array("Amaia ","Gorbeia Jainaga ",945010101," agobea@ga.com"),
    array("Ane ","Larrain Ogeta ",845010101," alarrain@ga.com"),
    array("Maite ","Murgiondo Lekue ",75010101," mmurgio@ga.com"),
    array("Lorea ","Aranceta Otxoa ",645010101," laran@ga.com"),
    array("Juan ","Algo Otro ",545010101," juaalgo@ga.com")
);

$tamaño = count($agenda);
echo $tamaño;
$i=0;
$valores = count($agenda[$i]);
echo $valores;


echo "<table>";
while ($i<$tamaño){
    $x=0;
    while ($x<$valores){
        echo "<td>";
        echo $agenda[$i][$x];
        $x++;
    }
    $i++;
    echo "<tr>";


}


?>

</body>
</html>
