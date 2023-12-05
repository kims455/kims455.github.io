document.addEventListener('DOMContentLoaded', function() {
    const mouseTail = document.querySelector('.mouse-tail');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        mouseTail.style.left = mouseX + 'px';
        mouseTail.style.top = mouseY + 'px';
    });
});

function enterWebsite() {
    window.location.href = "index.html"; 
}

