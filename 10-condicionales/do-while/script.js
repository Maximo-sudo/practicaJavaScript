/*let dato;
do {
    dato = parseInt(prompt('Introduzca valor 1 para salir...'));
    document.write('Introducio el valor: ', dato);
    document.write('<br>');
} while (dato != 1);
document.write('Fin de bucle')
*/
/*
let usuario, clave, control;

control = 0;
usuario = prompt('Introducca Usuario');
clave = prompt('Introducca Contraseña');

do {
    if(clave != '7654321aA') {
        clave = prompt('Contraseña Intcorrecta\n',
            'Intente De Nuevo...');
            control = 0;
    } else {
        control = 1;
    }
} while (control != 1);
document.write('Acceso correcto');
*/


/**/let usuario, clave, control;

control = 0;
usuario = prompt('Introduzca Usuario');
clave = prompt('Introduzca Contraseña');

do {
    if(usuario != 'user' || clave != '7654321aA') {
        usuario = prompt('Usuario o Contraseña Incorrectos\n',
            'Introduzca Usuario:');
        clave = prompt('Introduzca Contraseña:');
        control = 0;
    } else {
        control = 1;
    }
} while (control != 1);
document.write('Acceso correcto');/**/