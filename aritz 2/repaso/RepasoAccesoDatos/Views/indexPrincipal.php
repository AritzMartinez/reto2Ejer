<?php require('partes/head.php') ?>

<ul>
    <?php foreach ($items as $item) : ?>
        <li>
            <?= $item->idUsuario?>
            <?= $item->nomUsuario?>
        </li>
    <?php endforeach; ?>

</ul>
<table border="1">
    <tr>
        <td>Id</td>
        <td>Nombre</td>
        <td>Eliminar</td>
    </tr>
    <?php foreach ($items as $item) : ?>
        <tr>
            <td><?= $item['idUsuario'] ?> </td>
            <td><?= $item['nomUsuario'] ?></td>
            <td>(<a href='index.php?accion=eliminar&idUsuario=<?= $item['idUsuario'] ?>'>Eliminar</a>)</td>
        </tr>
    <?php endforeach; ?>


    <?php


    ?>
</table>

<h5>Añadir Usuario</h5>
<form action="index.php" method="get">
    <label>Nombre: </label><input type="text" name="nombre">
    <label>Contraseña: </label><input type="text" name="pass">
    <input type="hidden" name="accion" value="insertar">
    <input type="submit" value="Añadir">
</form>

<?php require('partes/footer.php') ?>














