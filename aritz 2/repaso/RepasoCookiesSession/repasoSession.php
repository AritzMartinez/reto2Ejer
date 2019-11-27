<?php
session_start();

function inicializarLista(){
    if(!isset($_SESSION["listaPersonas"])){
        $_SESSION["listaPersonas"] = array();
    }
}

if (isset($_GET["accion"])) {
    $accion = $_GET["accion"];
    switch ($accion) {
        case 'insert':
            if(isset($_GET["persona"])) {
                $nombrePersona = $_GET["persona"];
                array_push($_SESSION["listaPersonas"], $nombrePersona);
            }
            break;
    }
}

function generarListaPersonas($personas){
    if($personas > 0) {
        echo "<ul>";
        foreach ($personas as $persona) {
            echo "<li>$persona</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No hay asistentes</p>";
    }
}

inicializarLista();




?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="repasoSession.php" method="get">
    <label>Nombre: </label><input type="text" name="persona">

    <input type="hidden" name="accion" value="insert">
    <input type="submit" value="Añadir">
</form>

<?php generarListaPersonas($_SESSION["listaPersonas"]) ?>
<?php
echo $_GET['persona'];
echo $_SESSION['listaPersonas'];
?>
</body>
</html>
