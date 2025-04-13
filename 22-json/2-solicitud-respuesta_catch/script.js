let datoJson;
fetch('persona.json')
    .then(resp => resp.json())
    .then((salida) => {
        datoJson = salida;

        let elementText = document.getElementById("nombre");
        elementText.textContent = datoJson.nombre;
    })
    .catch(function(error) {
        alert("Error: " + error);
    })