function startTimer() {
    const segundos = document.getElementById('timeSelect').value;
    let timeOut = parseInt(segundos);
    
    if (isNaN(timeOut) || timeOut <= 0) {
        Swal.fire('Ingresa un tiempo válido');
        return;
    }

    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const minutes = Math.floor(timeOut / 60);
        const seconds = timeOut % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeOut <= 0) {
            clearInterval(interval);
            tiempoCumplido();
            Swal.fire('¡Se terminó el tiempo!');
        }
        timeOut--;
    }, 1000);
}

let elementoAlarma = document.getElementById('textoAlarma');

function tiempoCumplido() {
    elementoAlarma.textContent = "ENCENDIDO";
    elementoAlarma.style.color = "green";
}