const stack = document.querySelector('.stack');
const gallery = document.querySelector('.gallery');

function createStackImages() {
    for (let i = 1; i <= 55; i++) {
        const img = document.createElement('img');
        img.src = `assets/trimmed${i}.webp`;
        img.alt = `Manhole image ${i}`;

        const angle = (i / 55) * (Math.PI * 2);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        img.style.transform = `translate(${x}px, ${y}px)`; 
        stack.appendChild(img);

        img.addEventListener('click', function() {
            showGallery();
        });
    }
}

function showGallery() {
    stack.style.display = 'none';
    gallery.innerHTML = '';
    gallery.style.display = 'grid';

    for (let j = 1; j <= 55; j++) {
        const galleryImg = document.createElement('img');
        galleryImg.src = `assets/trimmed${j}.webp`;
        galleryImg.alt = `Manhole image ${j}`;
        gallery.appendChild(galleryImg);
    }
}

function initializeImages() {
    const images = document.querySelectorAll('.stack img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
        }, index * 70);
    });
}

createStackImages();
window.onload = initializeImages;