<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>


<?php


$ciudades = array('paris', 'berlin', 'amsterdam','praga');

echo "<ul>";
foreach ($ciudades as $ciudad){
    echo "<li>$ciudad</li>";
}

?>

</body>
</html>
