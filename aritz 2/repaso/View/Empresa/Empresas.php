<?php
require_once "../BD/conexionBD.php";
require_once "../BD/empresa.php";

$dbh = connect();

?>
<div class="contenedor">
    <div class="datosEmpresas">
        <p class="nombreDatos">Datos de la Empresa:</p>
        <?php
        $datosEmpresa = datosEmpresas($dbh);
        echo "<table border='1'>";
        echo "<tr>
                    <td>Nombre de la empresa</td>
                    <td>Telefono</td>
                    <td>Emial</td>
                    <td>Direccion</td>
                 </tr>";
        foreach ($datosEmpresa as $row) {
            echo "<tr>
                    <td>" . $row["nomEmpresa"] . "</td>
                    <td>" . $row["telefono"] . "</td>
                    <td>" . $row["email"] . "</td>
                    <td>" . $row["direccion"] . "</td>
                 </tr>";
        }
        echo "</table>";
        ?>
    </div>
</div>
