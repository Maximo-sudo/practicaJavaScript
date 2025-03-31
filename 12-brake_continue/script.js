/*for(let a = 0; a < 10; a++) {
    document.write(a);
    document.write('<br>');
    if (a == 3) {
        document.write('Esta es la ultima linea',
            'por lo que finaliza el bucle.');
        break;
    }
}*/


/*
let palabra = 'maximo';
let resultado = '';

for (let f in palabra) {
    if (palabra[f] == 'a') {
        continue;
    } else {
        resultado += palabra[f];
    }
}

document.write(resultado);*/


let palabra = 'maximo';
let resultado = '';

for (let f in palabra) {
    if (palabra[f] == 'a' || palabra[f] == 'o') {
        continue;
    } else {
        resultado += palabra[f];
    }
}

document.write(resultado);