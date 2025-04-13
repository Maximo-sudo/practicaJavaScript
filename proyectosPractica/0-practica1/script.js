class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion() {
        return `${this.nombre} Peso: ${this.peso} Edad: ${this.edad}`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion() {
        return `${super.informacion()} Raza: ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion() {
        return `${super.informacion()} Sexo: ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion() {
        return `${super.informacion()} Color: ${this.color}`;
    }
}

let perro1 = new Perro('Firulais', 10, 5, 'Yorkshire');
let gato1 = new Gato('Michi', 5, 3, 'Macho');
let conejo1 = new Conejo('Bugs', 2, 1, 'Blanco');

let animales = [perro1, gato1, conejo1];

function showAnimals() {
    let lista = document.getElementById('listAnimals');

    for(let animal of animales) {
        let item = document.createElement('li');
        item.textContent = animal.informacion();
        lista.appendChild(item);
    }
}