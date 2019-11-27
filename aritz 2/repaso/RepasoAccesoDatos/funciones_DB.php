<?php
function connect()
{
    $dbname = "dtb";
    $host = "localhost";
    $user = "pruebas";
    $pass = "12345";

    try {
        # MySQL
        $dbh = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
        return $dbh;
    } catch (PDOException $e) {
        echo $e->getMessage();
        return null;
    }
}

function RPselectAll($dbh)
{

    $stmt = $dbh->prepare("Select idUsuario,nomUsuario From Usuario");
    /*$stmt->setFetchMode(PDO::FETCH_OBJ); = <?= $item->idUsuario?> */
    $stmt->execute();
    return $stmt->fetchAll();
}
function RPdelete($dbh,$id){
    $data = array('id'=>$id);
    $stmt = $dbh->prepare("DELETE from Usuario Where idUsuario = :id");
    $stmt->excute($data);
}

function RPinsertUsuario($dbh, $nomus, $password)
{
    $data = array('nomusuario' => $nomus, 'password' => $password);

    $stmt = $dbh->prepare("INSERT INTO Usuario (nomUsuario,password) VALUES (:nomusuario,:password)");
    $stmt->execute($data);



}


?>