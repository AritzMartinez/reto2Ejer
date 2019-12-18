<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recu</title>
</head>
<body>
<h1>Detalle del empleado</h1>
<?php foreach ($empleado as $emple):?>

    <label>Dni: </label><labe><?=$emple['dni_empleado'] ?> </labe>
    <label>Nombre: </label><labe><?=$emple['nombre'] ?> </labe>
    <label>Domicilio: </label><labe><?=$emple['domicilio'] ?> </labe>
    <label>Baja: </label><labe><?=$emple['baja'] ?> </labe>


<?php endforeach; ?>
</body>
</html>