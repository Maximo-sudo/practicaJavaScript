let audio = document.getElementById('audio');
let listSongs = document.getElementById('listSongs');

listSongs.addEventListener('change', changeSong);

function changeSong() {
    let songSelected = listSongs.value;
    audio.src = songSelected;
    audio.play();

    let songName = new CustomEvent('songChanged');
    audio.dispatchEvent(songName);
}

audio.addEventListener('songChanged', showSongName);

function showSongName() {
    console.log('Canción Actual: ' + listSongs.value);
}
