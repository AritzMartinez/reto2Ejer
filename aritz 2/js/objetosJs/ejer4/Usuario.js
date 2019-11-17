function Usuario() {
    this.dni;
    this.contraseña;
    this.cuentas = [];

}

function Usuario (dni,contraseña,cuentas){
        this.dni = dni;
        this.contraseña = contraseña;
        this.cuentas = cuentas;
}
Usuario.prototype.añadirCuenta = function (cuenta) {
    this.cuentas.push(cuenta);
}