const gallery = document.querySelector('.gallery');

for (let i = 1; i <= 55; i++) {
    const img = document.createElement('img');
    
    img.src = `assets/trimmed${i}.png`;

    img.alt = `Manhole image ${i}`;
    
    gallery.appendChild(img);
}