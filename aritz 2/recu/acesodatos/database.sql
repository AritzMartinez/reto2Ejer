CREATE TABLE usuario (
    id VARCHAR(5) NOT NULL,
    usuario VARCHAR(8) NOT NULL,
    contrasena VARCHAR(8) NOT NULL
);
CREATE TABLE empleado (
    dni_empleado VARCHAR(8) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    domicilio VARCHAR(60),
    baja int (1)
);