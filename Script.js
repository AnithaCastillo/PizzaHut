// JavaScript source code
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

