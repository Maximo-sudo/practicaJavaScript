
function startTimer() {
    const segundos = document.getElementById('timeSelect').value;
    let timeOut = segundos;
    document.getElementById('timer').textContent = timeOut;
//    setTimeout(timeCount, 1000*elementSeconds);
    const inteval = setInterval(() => {
        timeOut--;
        document.getElementById('timer').textContent = timeOut;´

        if (timeOut <= 0) {
            clearInterval(inteval);
            timeCount();
        }

    })
}

function timeCount() {
    swal.fire('Se termino el tiempo.');
}