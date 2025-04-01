class Persona {
    nombre = 'Maximo';
    apellido = 'Vidal';
    dirección = 'Via Complutense 77';
    telefono = 1234567890;
    email = 'hola@gmali.com';

    trabajo() {
        return 'Canon';
    }
    
    estudios() {
        return 'Salesianos';
    }
}

const maximo = new Persona();
const pepe = new Persona();
const maria = new Persona();

document.write(maximo.nombre, ' ',maximo.apellido);
document.write('<br>');
document.write(maximo.trabajo());
document.write('<br>');
document.write('<br>');
document.write('Pepe ', pepe.apellido);
document.write('<br>');
document.write('Estudia en: ', pepe.estudios());
document.write('<br>');
document.write('<br>');
document.write('Maria ', maria.apellido);
document.write('<br>');
document.write('Trabaja en: ', maria.trabajo());