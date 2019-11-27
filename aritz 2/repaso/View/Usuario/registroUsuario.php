
<!DOCTYPE html>
<html lang="en">
    <div class="contenedor">
        <div id="formuRegistro" class="cFormulario">

            <form action="../../RegistroUsuario/comprobarRegistroUsuario.php" method="post">
                <div class="tituloFormulario"><h2>Registrate</h2></div>
                <div class="camposFormulario">
                <input type="text" name="username" id="username" placeholder="Nombre de usuario">
                <input type="password" name="password" id="password" placeholder="Contraseña" required>
                <input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" required>
                </div>
                <div class="botonFormulario">
                  <input type="submit" name="resgistrarse" value="Registrarse">
                </div>
                <div class="linkFormulario">
                </div>
            </form>


         </div>
        </div>
    </body>
</html>