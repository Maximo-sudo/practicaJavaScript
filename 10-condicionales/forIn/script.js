//solo funciona para elementos de variables que contienen una cantidad de elementos
/*
let palabra1 = 'Hola';

for (let a in palabra1) {
    document.write(a);
    document.write('<br>');
}

document.write('<br>');

let palabra2 = 'Hola';

for (let b in palabra2) {
    document.write(palabra2[b]);
    document.write('<br>');
}*/

//ejemplo, como contar las vocales de una palabra.
let palabra = 'maximo';
let vocal = 0;

for(let a in palabra) {
    if(palabra[f]=='a' || palabra[f]=='e' ||
    palabra[f]=='i' || palabra[f]=='o' ||
    palabra[f]=='u'){
        vocal++;
    }
}
document.write('Cantidad de vocales: ', vocal);