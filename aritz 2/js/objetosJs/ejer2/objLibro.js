function Libro (titulo,isbn,tipo,numEjemplares,diponibilidad,fechaDisponible,autores){
        this.titulo = titulo;
        this.isbn = isbn;
        this.tipo = tipo;
        this.numEjemplares = numEjemplares;
        this.diponibilidad = diponibilidad;
        this.fechaDisponible = fechaDisponible;
        this.autores = autores;
}
Libro.prototype.añadirAutor = function (autor) {
    this.autores.push(autor);
}