<?php
require_once "../BD/conexionBD.php";
require_once "../BD/usuario.php";

$dbh = connect();

?>
<div class="contenedor">
    <div class="datosUsuario">
        <p>Datos de los usuarios:</p>
        <?php
        $arryUsuario = datosUsuario($dbh);
        echo "<table border='1'>";
        echo "<tr> 
                <td>Id</td>
                <td>Nombre del usuario</td>
                <td>Contraseña</td>
                <td>Id de la empresa</td>
              </tr>";
        foreach ($arryUsuario as $row) {
            echo "<tr>
                <td>".$row['idUsuario']."</td>
                <td>".$row['nomUsuario']."</td>
                <td>".$row['password']."</td>
                <td>".$row['idEmpresa']."</td>
            </tr>";
        }
        echo "</table>";
        ?>
    </div>
</div>
