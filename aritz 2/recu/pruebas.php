


<?php
session_start();
require "funciones_db";

$dbh = connect();
if(!isset($_SESSION['usuario'])){
    if (isset($_GET['accion']) && $_GET['accion'] == 'login' ){
        $usu = $_GET['usuario'];
        $contra = $_GET['contra'];
        $usuarios = selectAllUsuario($dbh);

        $logi = logi($usuarios,$usu,$contra);

        if($logi){
            $empleados = selectAll();
            require "session/views/principal.php";
        }else{
            require "session/views/usuario.php";

        }
    }else{
        require "session/views/usuario.php";
    }

}else{
    if(isset($_GET['accion'])){
        $accion = $_GET['accion'];
        switch ($accion){
            case 'insert':
                $dni = $_GET['dni'];
                $nombre = $_GET['nom'];
                $domci = $_GET['domi'];

                insertaEmpleado($dbh,$dni,$nombre,$domci);

                break;
            case 'update':
                $dni = $_GET['dni'];
                update($dbh,$dni);

                break;
            case 'delete':
                delete($dbh);

                break;
        }
    }
    $empleados = selectAll();
    require "session/views/principal.php";
}

function login($usuarios,$usu,$contra){
    foreach ($usuarios as $usuario){
        if($usuario['usuario'] == $usu &&  $usuario['contrasena'] == $contra){
            $_SESSION['usuario'] = $usu;
            return true;
        }
    }
    return false;
}











?>