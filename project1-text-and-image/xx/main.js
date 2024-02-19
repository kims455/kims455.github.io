document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video-container");

    videoContainer.addEventListener("mouseleave", function () {
        document.body.style.cursor = "url('assets/peace-dove1-pixel.png'), auto";
    });

    videoContainer.addEventListener("mouseenter", function () {
        document.body.style.cursor = "default";
    });
});