<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<?php

$ciudades = array('paris', 'berlin', 'amsterdam','praga');

$tamaño = count($ciudades);

for ($i=0; $i<$tamaño; $i++){
 echo $ciudades[$i];
 echo "<br>";
}












?>

</body>
</html>