<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<?php
$ciudad = array('paris', 'berlin', 'amsterdam','praga');

$animales = array('perro', 'gato', 'rata','pez');
$colores = array('rojo', 'verde', 'azul','gris');

$numAnimales = count($animales);
$numColores = count($colores);

array_push($animales,"ardilla");
array_unshift($colores,"naranja");
print_r($animales);
print_r($colores);

$union = array_merge($animales, $colores);
print_r($union);

echo "<p>$numAnimales</p>";
echo "<p>$numColores</p>";

?>

</body>
</html>