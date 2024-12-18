let currentImageIndex = 0;
const images = [
    {
        src: '../images/gallery/image1.jpg',
        caption: 'Image 1 Description'
    },
    // Add more images
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    
    lightbox.classList.add('active');
    lightboxImg.src = images[currentImageIndex].src;
    caption.textContent = images[currentImageIndex].caption;
    
    // Disable scroll on body
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    
    lightboxImg.src = images[currentImageIndex].src;
    caption.textContent = images[currentImageIndex].caption;
}

// Event Listeners
document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.next').addEventListener('click', () => changeImage(1));

// Close lightbox with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
}); 