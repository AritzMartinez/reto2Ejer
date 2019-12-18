<?php

function sessionEmpleado(){

    if(!isset($_SESSION['empleados'])){
        $_SESSION['empleados'] = array();
    }

}

function compobarLogin($usuarios,$usuario,$contras){
    if (isset($usuarios[$usuario])){
        if ($usuarios[$usuario]['contrasena'] == $contras){
            return true;
        }
    }
    return false;
}

function insertaEmpleado($dni_empleado, $nombre, $domicilio){
    array_push($_SESSION["empleados"], array(
            "dni_empleado" => $dni_empleado,
            "nombre" => $nombre,
            "domicilio" =>$domicilio,
            "baja" => 0
        )
    );
}

function borrarTodos(){
    $_SESSION["empleados"] = array();
}

function marcarEmpleado($dni_empleado){
    $index = 0;
    foreach ($_SESSION['empleados'] as $empleado)
    {
        if($empleado["dni_empleado"] == $dni_empleado){

            $_SESSION['empleados'][$index]["baja"] = 1;
        }
        $index++;
    }
}


?>