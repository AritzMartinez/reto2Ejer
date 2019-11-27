<?php
require_once 'funciones_DB.php';

$dbh = connect();
/*if(isset($_GET["accion"])){
    $accion = $_GET["accion"];
    switch ($accion){
        case 'insertar':
            $nom = $_GET["nombre"];
            $pass = $_GET["pass"];
            RPinsertUsuario($dbh,$nom,$pass);
            break;
        case 'eliminar':
            $id = $_GET["id"];
            RPdelete($dbh,$id);
            break;
    }
}*/

$items = RPselectAll($dbh);

require 'Views/indexPrincipal.php';
?>


