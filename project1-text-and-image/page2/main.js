// audio and photo
document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('paper-photo');
    const audio = document.getElementById('audio');

    photo.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});