<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>

<?php
$diccionario = array(

    "apellidos" => array (
        "Aritz" => "Martinez",
        "Arkaitz" => "Galisteo",
        "jojo" => "jojo"
    ),
    "email" => array (
        "Aritz" => "aritz@gmail.com",
        "Arkaitz" => "arkaitz@gmail.com",
        "joj" => "jojo@gmail.com"
    )
);

function getDatos($array,$nombre,$valor){
    return $array[$valor][$nombre];

}


echo "<p>getDatos</p>";

?>

</body>
</html>