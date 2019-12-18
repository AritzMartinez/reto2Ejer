<?php
session_start();
require "funciones_db.php";

$dbh = connect();

// Miramos si el usuario esta logueado o no. Si no está, comprobamos si está enviado algo del formulario de login:
if (!isset($_SESSION['usuario'])) {
    if (isset($_GET['accion']) && $_GET['accion'] == 'login') {
        $usu = $_GET['usu'];
        $contra = $_GET['contra'];
        $usuarios = selectAllUsuario($dbh);
        $login = login($usuarios, $usu, $contra);
        if ($login) {
            $empleados = selectAll($dbh);
            require "views/principal.php";
        } else {
            // el login ha sido incorrecto:
            require "views/usuario.php";
        }
    } else {
        // esta intentando entrar por primera vez
        require "views/usuario.php";
    }

} else {
    // El usuario esta logueado
    if (isset($_GET['accion'])) {
        $accion = $_GET['accion'];
        switch ($accion) {
            case 'insert':
                $dni = $_GET['dni'];
                $nombre = $_GET['nombre'];
                $domicilio = $_GET['domi'];

                insert($dbh, $dni, $nombre, $domicilio);

                break;
            case 'delete':
                delete($dbh);

                break;
            case 'update':
                $dni = $_GET['dni_empleado'];
                update($dbh, $dni);

                break;
            case 'detalle':
                $dni = $_GET['dni_empleado'];
                $empleado = selectOne($dbh,$dni);
                require "views/detalle.php";

                die();
                break;

        }
    }
    $empleados = selectAll($dbh);
    require "views/principal.php";
}

function login($usuarios, $usu, $contra){
    foreach ($usuarios as $usuario) {
        if ($usuario['usuario'] == $usu && $usuario['contrasena'] == $contra) {
            $_SESSION['usuario'] = $usu;
            return true;
        }
    }
    return false;
}

?>