<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<?php
$coches = array('Seat', 'Audi', 'Mercedes','Bmw','Fiat');

$tamaño = count($coches);

$i=0;

do{
        echo $coches[$i];
        echo "<br>";
        $i++;
}while($i<$tamaño);
?>

</body>
</html>
