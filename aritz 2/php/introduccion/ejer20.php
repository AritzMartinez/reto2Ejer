<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>


<?php

$total = 0; // Define una variable con valor 0

for($i=1;$i<=10;$i++) {

    $total += $i; // Agrega a la variable la suma del anterior

}

echo 'suma = '.$total;

?>

</body>
</html>