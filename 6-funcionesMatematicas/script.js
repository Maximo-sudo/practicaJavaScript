// var y let son dos formas de declarar variables en JavaScript
var precio = Math.round(79.99); //redondea al siguiente entero apartir de 0.5
document.write('precio: ', precio);
document.write('<br>');

var precio = Math.ceil(79.09); //redondea al siguiente entero sin importar el decimal
document.write('precio: ', precio);
document.write('<br>');

var precio = Math.floor(79.99); //hace lo mismo que el ceil. Pero este redondea hacia abajo
                                //el ceil redondea hacia arriba
document.write('precio: ', precio);
document.write('<br>');

//para calcular el seno de un angulo
var angulo = Math.sin(30);
document.write('seno: ', angulo);
document.write('<br>');
/*En resumidas cuentas es lo siguiente:
    - Math.sin --> calcula el seno
    - Math.cos --> calcula el coseno
    - Math.tan --> calcula la tanjente*/

// calcular la exponencial de un numero
var expo = Math.exp(2); //potencia de 2
document.write('exponencial: ', expo);
document.write('<br>');

//calcular el logaritmo de un numero
var log = Math.log(10);
document.write('logaritmo: ', log);
document.write('<br>');

// calcular valor absoluto
var absoluto = Math.abs(-10); //devuelve el valor absoluto de un numero
document.write('valor absoluto: ', absoluto);
document.write('<br>');

// calcular valor maximo
var max = Math.max(10, 30, 20, 50);
document.write('valor maximo: ', max);
document.write('<br>');

// calcular valor minimo
var min = Math.min(10, 30, 20, 50);
document.write('valor minimo: ', min);
document.write('<br>');

// valor aleatorio
var aleatorio = Math.random();
document.write('valor aleatorio: ', aleatorio);
document.write('<br>');
/* tras hacer eso devuelve un numero muy grande entre 0 y 1, 
ya que por defecto el random devuelve un numero entre 0 y 1.
Para solucionarlo haremos lo siguiente:*/
var aleatorio = Math.round(Math.random()*100); //esto nos devuelve un numero entre 0 y 100
document.write('valor aleatorio: ', aleatorio);
document.write('<br>');

//raiz cuadrada 
var valor = Math.sqrt(16); //raiz cuadrada de 16
document.write('raiz cuadrada: ', valor);
document.write('<br>');

//calcular exponente
var expo = Math.pow(2,2); 
document.write('exponente: ', expo); 



