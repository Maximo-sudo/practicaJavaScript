let texto1 = 'Hola';
let texto2 = "buenas";
let texto3 = 'Quiero ir a "dormir"'; //si queremos resaltar con comillas lo haremos de esa forma
let texto4 = "En 'mi' cama";

document.write(texto1,' ',texto2);
document.write('<br>');
document.write(texto3);
document.write('<br>');
document.write(texto4);
document.write('<br>');

// en el caso de tener que escribir en varias lineas haremos lo siguiente.
// Forma1
let texto5 = 'Esto es una cadena de texto muy larga que '+
'tenemos que escribir en varias lineas.';
document.write(texto5);
document.write('<br>');

// Forma2
let texto6 = 'Esto es una cadena de texto muy larga que \
tenemos que escribir en varias lineas.';
document.write(texto6);

