// SECTION HERO
let currentIndex = 0;
        
function moveSlide(direction) {
            const items = document.querySelectorAll('.carousel-item');
            const totalItems = items.length;
            currentIndex = (currentIndex + direction + totalItems) % totalItems;
            const carouselInner = document.querySelector('.carousel-inner');
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        setInterval(() => moveSlide(1), 3000);
// SECTION HERO END

