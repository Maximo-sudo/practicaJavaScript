// operador y --> && 
//ejemplo1

    let a, b;
    a = 3;
    b = 3;

    document.write(a == b);

//ejemplo2
    let ciudad, edad;
    pais = prompt('Introduzca tu pais ...')
    edad = prompt('Introducca tu edad')

    if (pais == 'España' && edad >= 18) {
        document.write('Hola, eres un adulto con ',edad,' y vives en',pais);
    } else {
        document.write('O no eres adulto, o no vives en españa')
    }


// operador o --> ||
let dia, mes, anio;
dia = prompt('Introducca un dia ...');
mes = prompt('Introducca un mes ...');
anio = prompt('Introducca un año ...');

if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Pertenece al primer trimestre')
} else {
    document.write('No pertenece al primer trimestre')
}