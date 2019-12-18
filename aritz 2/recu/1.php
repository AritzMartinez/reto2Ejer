<?php
require_once "datos.php";
session_start();
//Creamos la session (array) con el nombre empleado
function sessionEmpleado(){
    if(!isset($_SESSION["empleado"])){
        $_SESSION["empleado"] = array();
    }
}
sessionEmpleado();

//Introducimos el dni_empleado en la session
if(isset($_GET["dni_empleado"])) {
    $dni_empleado = $_GET["dni_empleado"];

    array_push($_SESSION["empleado"], $dni_empleado);
}

if(isset($_GET["accion"])) {
    unset($_SESSION["empleado"]);
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recu</title>
</head>
<body>
<h1>Lista de Empleados</h1>
<table border="1">
    <tr>
        <td>Dni</td>
        <td>Nombre</td>
        <td>Domicilio</td>
        <td>Baja</td>
        <td>Dar de baja</td>
    </tr>
<?php
//Generamos la tabla con los empleados
tablaEmpleados($empleados);
function tablaEmpleados($empleados){
    foreach ($empleados as $empleado) {
        echo "<tr>
            <td>{$empleado['dni_empleado']}</td>
            <td>{$empleado['nombre']}</td>
            <td>{$empleado['domicilio']}</td>
            <td>{$empleado['baja']}</td>
            <td><a href='index.php?dni_empleado={$empleado['dni_empleado']}'>Atender</a></td>
        </tr>";
    }
}
?>
</table>
<?php
//Generamos la lista con los empleados seleccionados
function generarListaEmpleados($empleados, $catalogoEmpleados){
    if($empleados > 0) {
        echo "<ul>";
        foreach ($empleados as $empleado) {
            echo "<li>{$catalogoEmpleados[$empleado]['dni_empleado']} {$catalogoEmpleados[$empleado]['nombre']}</li>";

        }
        echo "</ul>";
        echo "<a href='index.php?accion=comprar' class='btn btn-primary'>Comprar</a>";
    }
}
?>

<h4>Cesta de la compra</h4>
<?php
//
if(isset($_SESSION["empleado"])) {
    generarListaEmpleados($_SESSION["empleado"], $empleados);
} else {
    echo "No hay empleados seleccionados";
}
?>

</body>
</html>
