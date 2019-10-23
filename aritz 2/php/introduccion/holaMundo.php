<html>
<head>
 <title>Hola Mundo PHP</title>
</head>
<body>
 <?php
 $adios = "Adios Mundo";
 $adios1 = "Adios Mundo";
 $resu =  "{$adios} {$adios1}";

 $nombre = "Mikel";
 $edad = 22;

 $numero1 = 5;
 $numero2 = 6;


 $a = 5;
 $b = 8;

 $resta = $a-$b;
 $division = $a/$b;
 $mayor = $a>$b;
 $menor = $a>=$b;
 $resultado= $numero1 * $numero2 + ($numero1/$numero2);








 echo "<p>Hola Mundo </p>";
 echo "<p>$resu</p>";
 echo "<p>Mi amigo $nombre tiene $edad años </p>";
 echo "<p>$resultado </p>";

 echo "<p>$resta </p>";
 echo "<p>$division</p>";
 echo "<p>$mayor</p>";
 echo "<p>$menor</p>";







 ?>
</body>
</html>