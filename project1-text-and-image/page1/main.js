const peaceDoves = document.querySelectorAll('.paper-dove1, .paper-dove2');

const overlayTexts = document.querySelectorAll('.overlay-text');

let currentIndex = 0;

overlayTexts.forEach(text => {
    text.style.display = 'none';
});

peaceDoves.forEach(dove => {
    dove.addEventListener('click', () => {
        if (currentIndex < overlayTexts.length) {
            overlayTexts[currentIndex].style.display = 'block';
            currentIndex++;
        }
    });
});
