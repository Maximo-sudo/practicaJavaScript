//funcion declarativa
/*function saludar() {
    document.write('Hola Mundo!');
    document.write('<br>');
    despedir();
}

function despedir() {
    document.write('Adios Mundo!');
    document.write('<br>');
}

saludar();
*/

// si queremos lanzar alguna alerta usaremos alert

/*function alerta() {
    alert('Hola');
}

alerta();*/

let saludo, despedida;

function recolectDatos() {
    saludo = prompt('Ingrese Un Saludo');
    despedida = prompt('Ingrese Una Despedida');
    ejec();
}

function ejec() {
    alert(saludo);
    alert(despedida);
}

recolectDatos();
