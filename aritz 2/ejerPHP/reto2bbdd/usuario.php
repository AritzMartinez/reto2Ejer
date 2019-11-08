<!--<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="usuario.php" method="get">

    Producto:
    <input type="text" name="nombre"><br>
    Passsword:
    <input type="text" name="pwd"><br>
    <input type="submit" value="Enviar" name="enviar">

</form>
</body>
</head>
</html>-->



<?php
connect();
function connect(){
    $dbname="reto2";
    $host="localhost";
    $user="root";
    $pass="";
    try {
        #MySQL
        $dbh = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    } catch (PDOException $e) {
        echo $e->getMessage();
        return null;
    }
   /* $idempesa = select($dbh);
    echo $idempesa;*/
   insert($dbh/*$idempesa*/);
}


/*function select ($dbh){
    $stmt = $dbh->prepare("SELECT idEmpresa FROM Empresa Where nomEmpresa = 'thunder'");
    $stmt->setFetchMode(PDO::FETCH_OBJ);
    $stmt->execute ();

    while ($row = $stmt ->fetch()){
        $idempresa = $row->idEmpresa;
    }
    return $idempresa;
}*/

function insert($dbh/*,$idempesa*/){
    $data = array('nombre' => 'juan', 'pwd' => '123',/*'idempresa' => $idempesa*/);

    $stmt = $dbh->prepare("INSERT INTO Usuarios (nomUsuario, password) VALUES (:nombre, :pwd)") ;
    $stmt->setFetchMode(PDO::FETCH_OBJ);
    $stmt->execute($data);
    echo "insert";

}