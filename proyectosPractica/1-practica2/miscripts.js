let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta() {
    let datosJson;
    fetch('resumen.json')
        .then(resp => resp.json())
        .then((salida) => {datosJson = salida;
            document.getElementById("titular")
            titular.textContent = salida.titular;

            document.getElementById("no_miembro")
            no_miembro.textContent = salida.no_miembro;

            document.getElementById("direccion")
            direccion.textContent = salida.direccion;

            document.getElementById("telefono")
            telefono.textContent = salida.telefono;

            document.getElementById("email")
            email.textContent = salida.email;

            document.getElementById("sado_usd")
            saldo_usd.textContent = salida.saldo[0].monto;

            document.getElementById("saldo_eu")
            saldo_eu.textContent = salida.saldo[1].monto;

            document.getElementById("miembro_desde")
            miembro_desde.textContent = salida.miembro_desde;

            let imagen = document.getElementById("foto");
            imagen.appendChild(foto);
        })
}