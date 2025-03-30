//condicional simple
let nombre, edad;
nombre = prompt('Introducca su nombre ...');
edad = prompt('Introducca su edad ...')

if (edad >= 18) {
    document.write('Bienvenido ', nombre);
} else {
    document.write(nombre,' eres menor de edad');
}

/*Algo que tengo que aclarar antes de lo siguiente es que hay otra forma de poner varios condicionales,
pero yo he pasado al mas corto ya que lo considero mas simple y facil de entender.
La otra forma es poner if-else dentro de los else, con esto me refiero a esto:
    if ...
    else {
      if ...
      else {
        if ...
        else ...
      }
    }
Pero no me gusta ponerla en practica ya que ocupa mucho espacio.*/

//condicional para controlar que se introducen datos
// Siguiendo con lo anterior la otra forma de hacerlo es usando "else if"

let nombre, edad;
nombre = prompt('Introducca su nombre ...');
edad = prompt('Introducca su edad ...');

if (edad >= 18) {
    document.write('Bienvenido ', nombre);
} else if (edad < 18) {
    document.write(nombre, ' eres menor de edad');
} else {
    document.write('Ingrese algun dato');
}

/*Tras esto nos encontramos un problema, y es que en el caso de que si no ingresamos un valor 
en el campo de la edad. Es considerado como un numero menor de 18 y hara lo del else if. 
Por lo que para solucionar esto usaremos el "parseInt"*/

let nombre, edad;
nombre = prompt('Introducca su nombre ...');
edad = prompt('Introducca su edad ...');

edad = parseInt(edad);

if (edad >= 18) {
    document.write('Bienvenido ', nombre);
} else if (edad < 18) {
    document.write(nombre, ' eres menor de edad');
} else {
    document.write('Ingrese algun dato');
}