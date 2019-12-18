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
    <?php foreach ($empleados as $empleado):?>
        <tr>
            <td><?=$empleado['dni_empleado'] ?></td>
            <td><?=$empleado['nombre'] ?></td>
            <td><?=$empleado['domicilio'] ?></td>
            <td><?=$empleado['baja'] ?></td>
            <td><a href='index.php?accion=update&dni_empleado=<?= $empleado['dni_empleado'] ?>'>Dar de baja</a></td>
            <td><a href='index.php?accion=detalle&dni_empleado=<?= $empleado['dni_empleado'] ?>'>Detalle</a></td>

        </tr>
    <?php endforeach; ?>
</table>



<h2>Añadir Usuario</h2>
<form action="index.php" method="get">
    <label>Dni: </label><input type="text" name="dni">
    <label>Nombre: </label><input type="text" name="nombre">
    <label>Domicilio: </label><input type="text" name="domi">
    <input type="hidden" name="accion" value="insert">
    <input type="submit" value="Añadir">

</form>
<form action="index.php" method="get">
    <input type="hidden" name="accion" value="delete">
    <input type="submit" value="Borrar todo">
</form>

</body>
</html>