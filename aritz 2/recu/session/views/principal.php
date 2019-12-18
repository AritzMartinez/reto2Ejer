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
    echo $_SESSION['usuario'];
    //Generamos la tabla con los empleados
    tablaEmpleados();
    function tablaEmpleados(){
        foreach ( $_SESSION['empleados'] as $empleado) {
            echo "<tr>
            <td>{$empleado['dni_empleado']}</td>
            <td>{$empleado['nombre']}</td>
            <td>{$empleado['domicilio']}</td>
            <td>{$empleado['baja']}</td>
            <td><a href='index.php?accion=atender&dni_empleado={$empleado['dni_empleado']}'>Atender</a></td>
        </tr>";
        }
    }
    ?>
</table>
<form action="index.php" method="GET">
    <label>Descripcion: </label>
    <input type="text" name="dni_empleado" >
    <input type="text" name="nombre" >
    <input type="text" name="domicilio" >
    <input type="hidden" name="accion" value="añadir">
    <input type="submit" value="Añadir">
</form>

<a href='index.php?accion=borrar'>Borrar</a>




</body>
</html>