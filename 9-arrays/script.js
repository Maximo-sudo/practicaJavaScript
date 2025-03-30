let numeros = [1,13,53,6,2];

document.write('Elementos: ',numeros);
document.write('<br>');

//mostrar valor en especifico
document.write('Primer elemento: ',numeros[0]);//ya que en js empieza a contar desde el 0
document.write('<br>');

//cambiar un valor en especifico
numeros[0] = 10;
document.write('Elementos: ', numeros);
document.write('<br>');

document.write('<br>-----------------------');
document.write('<br>');
let comida = ['Pizza', 'Hamburguesa', 'Tacos', 'Sushi'];
document.write('<br>');
document.write('Comimda: ',comida);

document.write('<br>');

//ver cantidad de elementos.
document.write('Cantidad Numereos: ',numeros.length);
document.write('<br>');
document.write('Cantidad Comida: ',comida.length);
document.write('<br>');

//saber ultimo elemento
document.write('Ultimo elemento: ',numeros[numeros.length-1]);
document.write('<br>');
document.write('Ultimo elemento: ',comida[comida.length-1]);
document.write('<br>');

//arrays en tipo texto
document.write('En string: ',numeros.toString());
document.write('<br>');

//unir tipos de arrays
let tex = ['a','b','c'];
let num =[1,2,3];
document.write('Alfanumerico: ', tex.concat(num));
document.write('<br>');
document.write('<br>-----------------------');
document.write('<br>');
document.write('<br>');
//borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar un elemento al final
numeros.push(500);
document.write(numeros);
document.write('<br>');

//eliminar el primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//agregrar elemento inicio
numeros.unshift(111);
document.write(numeros);
document.write('<br>');

//eleminar valores segun x cordenadas
numeros.splice(2,2); 
/*el primer valor especifica la posicion de inicio de borrado
el segundo valor especifica la cantidad a borrar*/
document.write(numeros);
document.write('<br>');



document.write('<br>');
document.write('<br>-----------------------');
document.write('<br>');
document.write('<br>');


//copiar array

let cantidades = [1,2,3,4,5,6,7];
let copia = cantidades.slice(2,4);//el primer valor es de donde empieza a copiar y el segundo donde termina.
document.write('Array cantidades: ',cantidades);
document.write('<br>');
document.write('Array copia: ',copia);
document.write('<br>');
document.write('<br>');
document.write('<br>-----------------------');
document.write('<br>');
document.write('<br>');

//ordenar valores menor - mayor
let orden = [1,4,2,6,3];
document.write(orden.sort());
document.write('<br>');

//ordenar valores mayor - menor
document.write(orden.reverse());
document.write('<br>');
