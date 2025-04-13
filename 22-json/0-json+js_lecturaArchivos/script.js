// MALA PRACTICA
/*let miPersona = {
        "nombre": "Pedro",
        "apellido": "Gonzalez",
        "edad": 30,
        "estudiante": true,
        "direccion": {
            "calle": "Alejo Carpentier",
            "ciudad": "Madrid"
        },
        "telefonos": [
            "123-456-789",
            "987-654-321"
        ]
}

let elementText = document.getElementById("nombre")
elementText.textContent = miPersona.nombre;*/


let datosJSON;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'persona.json', true); // true para que sea asincrono y no se ejecute el resto del script hasta que no se haya cargado el JSON
xhr.responseType = 'json'; // le decimos que la respuesta es un JSON
xhr.onload = function(){
    if (xhr.status === 200) { 
        datosJSON = xhr.response; //guardamos la respuesta en una variable
        let elementText = document.getElementById("nombre");
        elementText.textContent = datosJSON.nombre; // accedemos a la propiedad nombre del JSON cargado
    } else {
        // manejar el error
    }
}; // funcion que se ejecuta cuando se carga el JSON

xhr.send();
