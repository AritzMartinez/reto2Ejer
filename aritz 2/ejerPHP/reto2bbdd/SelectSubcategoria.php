<?php
function selectSubcategoria($dbh){
    $stmt = $dbh->prepare("SELECT idSubcategoria FROM Subcategoria Where nomSubcategoria = 'motos'");
    $stmt->setFetchMode(PDO::FETCH_OBJ);
    $stmt->execute ();

    while ($row = $stmt ->fetch()){
        $idsubcategoria = $row->idSubcategoria;
    }
    return $idsubcategoria;
}