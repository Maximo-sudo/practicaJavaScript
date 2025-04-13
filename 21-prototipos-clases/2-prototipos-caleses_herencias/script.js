// let papelz = new Papel(10, 20); // Proboca Error
class Papel {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }   
}

// let papelz = new Papel(10, 20); // No Proboca Error

let Papel_A = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

let Papel_B = class Papel_X {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}