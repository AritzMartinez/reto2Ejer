<?php
require_once "datos.php";

function inicializarCesta(){
    if(!isset($_SESSION["productosCesta"])){
        $_SESSION["productosCesta"] = array();
    }
}
inicializarCesta();

if(isset($_GET["idProducto"])) {
    $idProductoComprado = $_GET["idProducto"];
    array_push($_SESSION["productosCesta"], $idProductoComprado);
}

if(isset($_GET["accion"])) {
    unset($_SESSION["productosCesta"]);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<?php
function generarTabla($productos){
    echo "<table border='1'>";
    echo "<tr> 
                <td>Nombre</td>
                <td>Descripcion</td>
                <td>Precio</td>
                <td>Cantidad</td>
              </tr>";
    foreach ($productos as $id => $producto) {
        echo "<tr>
            <td>{$producto['nombre']}</td>
            <td>{$producto['descripción']}</td>
            <td>{$producto['precio']}</td>
            <td><a href='Principal.php?idProducto={$id}'>Comprar</a></td>
        </tr>";
    }
    echo "</table>";
}

function generarCestaCompra($productosComprados, $catalogoProductos){
    if($productosComprados > 0) {
        $precioTotal = 0;
        echo "<ul>";
        foreach ($productosComprados as $idProducto) {

            echo "<li>{$catalogoProductos[$idProducto]['nombre']} </li>";
            $precioTotal += $catalogoProductos[$idProducto]['precio'];
        }
        echo "</ul>";
        echo "<h5>Precio total: " . $precioTotal . "</h5>";
        echo "<a href='Principal.php?accion=comprar' class='btn btn-primary'>Comprar</a>";
    }

}

?>
<h2>Lista compra</h2>
<?php if(isset($_SESSION["productosCesta"])) {
    generarCestaCompra($_SESSION["productosCesta"], $productos);
} else {
    echo "No hay productos en la cesta";
}
?>

<h1>Productos</h1>
<?php
generarTabla($productos);
?>

</body>
</html>