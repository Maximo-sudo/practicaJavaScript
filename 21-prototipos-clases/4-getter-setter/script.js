class Deportista {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista {
    constructor(nombre, apellido, goles) {
        super(nombre, apellido);
        this._goles = goles;
    }
    get goles() {
        return this._goles;
    }
    set goles(nuevosGoles) {
        this._goles = nuevosGoles;
    }
}