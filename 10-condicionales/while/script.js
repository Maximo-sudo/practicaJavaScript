//valores desde 10 a 0
/*let f = 10;

while (f >= 0) {
    document.write('Vuelta numero ', f);
    document.write('<br>');
    f--;    
}
document.write('FIN DEL BUCLE')
*/

//valores desde 0 a 10
/*let a = 1;

while (a <= 10) {
    document.write('Vuelta numero ',a);
    document.write('<br>');
    a++;    
}
document.write('FIN DEL BUCLE')*/



let a = 1;
let suma = 0;
let valor;

while (a <= 5) {
    valor = parseInt(prompt('Introduzca un valor ...'));
    suma = suma + valor;
    a++;
}
document.write('La suma es: ',suma,'<br>');