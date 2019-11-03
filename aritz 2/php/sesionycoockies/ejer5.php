<html>
<head>
    <title>Hola Mundo PHP</title>
</head>
<body>
<form action="ejer5.php" method="get">
    <h2>Añadir asistente</h2>
    <input type="text" name="persona">
    <input type="submit" value="Añadir">
</form>

<ul>
    <?php añadirPersonas($_SESSION["contador"]) ?>
</ul>

<input type="button" onclick="<?php borrarSesion() ?>">
<p><?php echo $_SESSION["contador"] ?></p>

<?php
session_start();
if (!isset($contador)){
    $_SESSION["contador"] = 0;
}
function aumentarContador(){
    $_SESSION["contador"]++;
}
function añadirPersonas($contador){
    for ($i = 0; $i < $contador; $i++){
        if (isset($_SESSION["persona" . $i])){
            echo "<p>". $i . $_SESSION['persona'.$i] ."</p>";
        }else{
            echo "<p>adios</p>";
        }
    }
}
function guardarPersonaSesion($nombreSesion,$persona, $contador){
    $_SESSION[$nombreSesion . $contador] = $persona;
    aumentarContador();
}
function borrarSesion(){
    session_unset();
    $_SESSION["contador"] = 0;
}
if (isset($_GET["persona"])){
    guardarPersonaSesion("persona", $_GET["persona"], $_SESSION["contador"] );
}

?>

</body>
</html>
