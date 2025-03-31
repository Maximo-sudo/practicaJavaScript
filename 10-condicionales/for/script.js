/*
for (let a=1; a <= 20; a+=2) {
    document.write('Valor de a: ', a);
    document.write('<br>');
}
document.write('Fin Del Bucle');
document.write('<br>');
*/

const comida = ['pizza', 'tacos', 'sushi', 'ensalada'];

for(let a = 0; a < comida.length; a++) {
    document.write('Comida: ',a, ' = ', comida[a].toUpperCase());
    document.write('<br>');
}