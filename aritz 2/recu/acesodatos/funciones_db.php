<?php
function connect(){
    $servername = "localhost";
    $username = "pruebas";
    $password = "12345";

    try{
        $dbh = new PDO("mysql:host=$servername;dbname=dtb", $username, $password);
        return $dbh;
    }catch (PDOException $e){
        echo $e->getMessage();
        return null;
    }
}

function selectAllUsuario($dbh){
    $stmt =  $dbh->prepare("Select * from usuario");
    $stmt->execute();
    return $stmt->fetchAll();
}

function selectAll($dbh){
    $stmt = $dbh->prepare("Select * from empleado");
    $stmt->execute();
    return $stmt->fetchAll();
}

function insert ($dbh, $dni, $nombre, $domicilio){
    $data = array('dni'=>$dni,'nom'=>$nombre,'domi'=>$domicilio);

    $stmt = $dbh->prepare("Insert into empleado (dni_empleado,nombre,domicilio,baja) values (:dni,:nom,:domi,0)");
    $stmt->execute($data);
}

function update ($dbh,$dni){
    $data = array('dni'=>$dni);
    $stmt = $dbh->prepare("Update empleado set baja = 1 where dni_empleado = :dni");
    $stmt->execute($data);

}
function delete($dbh){
    $stmt = $dbh->prepare("Delete from empleado");
    $stmt->execute();
}
function selectOne($dbh,$dni){
    $data = array('dni'=>$dni);
    $stmt =  $dbh->prepare("Select * from empleado where dni_empleado = :dni");
    $stmt->execute($data);
    return $stmt->fetchAll();
}







?>
