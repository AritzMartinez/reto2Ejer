<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recu</title>
</head>
<body>
<h1>Login</h1>
<form action="index.php" method="get">
    <label>Dni: </label><input type="text" name="usu">
    <label>Nombre: </label><input type="text" name="contra">
    <input type="hidden" name="accion" value="login">
    <input type="submit" value="Login">
</form>
</body>
</html>