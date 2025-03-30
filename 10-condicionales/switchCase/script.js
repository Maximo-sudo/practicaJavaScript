//switch con valores numericos
let numero;
numero = parseInt(prompt('Introduzca algun valor entre 1 y 5'));

switch (numero) {
    case 1:
        document.write('Ingreso 1');
        break;
    case 2:
        document.write('Ingreso 2');
        break;
    case 3:
        document.write('Ingreso 3');
        break;
    case 4:
        document.write('Ingreso 4');
        break;
    case 5:
        document.write('Ingreso 5');
        break;
    default:
        document.write('Ingrese un numero valido')
        break;
}

//switch con strings
let color;
color = prompt('Seleccione algun color: ROJO/AZUL/VERDE');

switch (color) {
    case 'ROJO':
        document.write('Seleccionaste el color ROJO');
        break;
    case 'AZUL':
        document.write('Seleccionaste el color AZUL');
        break;
    case 'VERDE':
        document.write('Seleccionaste el color VERDE');
        break;
    default:
        document.write('No ingresaste ningun color.');
        break;
}