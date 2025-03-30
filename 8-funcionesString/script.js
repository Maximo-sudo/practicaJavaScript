let palabra = 'Hola Maxi'

document.write('La palabra es: ', palabra);
document.write('<br>');

//ver tamaño de un texto
document.write('Cantidad de las letras: ', palabra.length);
document.write('<br>');

//ver caracteres especificos
document.write('Primeras 4 letras: ',palabra.slice(0,4));
document.write('<br>');

//cambiar valores en un texto
let saludo = 'Hola a todos';
saludo = saludo.replace('Hola', 'Adios');
document.write(saludo);
document.write('<br>');

//poner en mayusculas
document.write('En mayusculas: ',palabra.toUpperCase());
document.write('<br>');
//poner en minusculas
document.write('En minusculas: ',palabra.toLowerCase());
document.write('<br>');

//unir texto
let palabra2 = 'Saludo: ';
document.write('Unir palabras: ',palabra2.concat(palabra));
document.write('<br>');

//acortar espacios lado derecho.
let palabra3 = '         Holas            '
document.write(palabra3);
document.write('<br>');
document.write(palabra3.trimStart());
//acortar espacios lado izquierdo
document.write('<br>');
document.write(palabra3.trimEnd());
//acortar en todos lados
document.write('<br>');
document.write(palabra3.trim());

//cortar cantidad de caracteres
document.write('<br>');
document.write(palabra.split('Hola'));





