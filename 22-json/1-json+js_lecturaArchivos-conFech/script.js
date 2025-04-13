let datoJson;
fetch('persona.json')
    .then(resp => resp.json()) // convertirLaRespuestaEnUn JSON
    .then((salida) => { // cuando se haya convertido el JSON, se ejecuta esta funcion
        datoJson = salida;

        let elementText = document.getElementById("nombre");
        elementText.textContent = datoJson.nombre;
        let elementText2 = document.getElementById("apellido");
        elementText2.textContent = datoJson.apellido;
        let elementText3 = document.getElementById("edad");
        elementText3.textContent = datoJson.edad;
        let elementText4 = document.getElementById("estudiante");
        elementText4.textContent = datoJson.estudiante;
        let elementText5 = document.getElementById("calle");
        elementText5.textContent = datoJson.direccion.calle;
        let elementText6 = document.getElementById("ciudad");
        elementText6.textContent = datoJson.direccion.ciudad;
        let elementText7 = document.getElementById("telefono1");
        elementText7.textContent = datoJson.telefonos[0];
        let elementText8 = document.getElementById("telefono2");
        elementText8.textContent = datoJson.telefonos[1];
    })