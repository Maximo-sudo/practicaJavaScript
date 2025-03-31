//ejemplo de escritura, toda de datos ...
/*function suma(a, b){
    return a + b;
}

document.write(suma(
    parseInt(prompt('Ingrese el primer valor...')), 
    parseInt(prompt('Ingrese el primer valor...'))));
document.write('<br>');

function saludar() {
    return 'Hola a todos';
}

document.write(saludar());
*/
// ejemplo con colores

function verColor(valor){
    valor = parseInt(prompt('Ingrese Un Numero Entre 1 - 3...'));
    switch (valor) {
        case 1:
            return 'ROJO';
        case 2:
            return 'VERDE';
        case 3:
            return 'AZUL';
        default:
            return 'Entre 1 y 3 gracias :>';
    }
}

document.write(verColor());