const flipbookImage = document.getElementById('flipbookImage');

const imageFilenames = [];
for (let i = 7210; i <= 7294; i++) {
    imageFilenames.push(`IMG_${i}.jpeg`);
}

let currentPage = 0;
const totalPages = imageFilenames.length;
const flipInterval = 0;

function updateImage() {
    flipbookImage.src = `assets/${imageFilenames[currentPage]}`;
}

function autoFlip() {
    currentPage = (currentPage + 1) % totalPages;
    updateImage();
}

setInterval(autoFlip, flipInterval);

updateImage();
