<?php
session_start();
require_once "funciones_db.php";
require_once "datos.php";

if (!isset($_SESSION['usuario'])) {
    if (isset($_GET['accion']) && $_GET['accion'] == 'login') {
        $usu = $_GET['usu'];
        $contra = $_GET['contra'];

        $login = login($usuarios, $usu, $contra);

        if ($login) {
            require "views/principal.php";
        } else {
            require "views/usuario.php";
        }
    } else {
        require "views/usuario.php";
    }
} else {
    if (isset($_GET['accion'])) {
        $accion = $_GET['accion'];
        switch ($accion) {
            case 'añadir':
                sessionEmpleado();
                $dni = $_GET['dni_empleado'];
                $nombre = $_GET['nombre'];
                $domi = $_GET['domicilio'];
                insertaEmpleado($dni, $nombre, $domi);
                break;
            case 'atender':
                $dni = $_GET['dni_empleado'];
                marcarEmpleado($dni);
                break;
            case 'borrar':
                borrarTodos();
                break;
        }
        require "views/principal.php";
    }
}

function login($usuarios, $usu, $contra){
    foreach ($usuarios as $key => $usuario) {
        if ($usuario['contrasena'] == $contra && $key == $usu) {
            $_SESSION['usuario'] = $usu;
            return true;
        }
    }
    return false;
}


/*session_start();
require_once "funciones_db.php";
require_once "datos.php";

if (isset($_GET['accion'])){
$accion = $_GET['accion'];
switch ($accion){
case 'login':
$_SESSION['usuario'] = $_GET["usu"];
$contra = $_GET["contra"];

echo "Hola " .$_SESSION['usuario'];

foreach ($usuarios as $key => $usuario) {

if($usuario['contrasena'] == $contra && $key == $_SESSION['usuario']){
require "views/principal.php";
die();
}
}
break;
case 'añadir':
sessionEmpleado();
insertaEmpleado($_GET["dni_empleado"], $_GET["nombre"], $_GET["domicilio"]);
require "views/principal.php";
die();
break;
case 'atender':
marcarEmpleado($_GET["dni_empleado"]);
require "views/principal.php";
die();
break;
case 'borrar':
borrarTodos();
require "views/principal.php";
die();
break;

}
}




require_once "views/usuario.php";*/
?>
