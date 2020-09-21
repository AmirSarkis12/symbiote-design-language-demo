const next = document.querySelector('.nextPicture');
const prev = document.querySelector('.prevPicture');
const pause = document.querySelector('.pause');

let playing = true;
let visiblePictureIdx = 0;


document.addEventListener("DOMContentLoaded", function () {
    const pictures = document.querySelectorAll('.carousel-image');

    pictures[visiblePictureIdx].classList.add('visible');

    let slideInterval = setInterval(goToSlide, 2000);

    if (pause) {
        pause.addEventListener('click', (e) => {
            e.preventDefault();
            return playing ? pauseCarousel() : playCarousel();
        });
    }

    if (next) {
        // move to the next slide
        next.addEventListener('click', (e) => {
            e.preventDefault();
            pauseCarousel();
            pictures[visiblePictureIdx].classList.remove('visible');
            visiblePictureIdx += 1;

            if (visiblePictureIdx >= pictures.length) {
                visiblePictureIdx = 0;
            }

            pictures[visiblePictureIdx].classList.add('visible');
        });
    }

    if (prev) {
        // move to the prev slide
        prev.addEventListener('click', (e) => {
            e.preventDefault();
            pauseCarousel();
            pictures[visiblePictureIdx].classList.remove('visible');
            visiblePictureIdx -= 1;

            if (visiblePictureIdx < 0) {
                visiblePictureIdx = pictures.length - 1;
            }
            pictures[visiblePictureIdx].classList.add('visible');
        });
    }

    // carousel playing
    function goToSlide() {
        pictures[visiblePictureIdx].classList.remove('visible');
        visiblePictureIdx += 1;

        if (visiblePictureIdx >= pictures.length) {
            visiblePictureIdx = 0;
        }

        pictures[visiblePictureIdx].classList.add('visible');
    }

    // pause carousel
    function playCarousel() {
        if (pause) {
            pause.innerHTML = '&#10074;&#10074;';
        }

        playing = true;
        slideInterval = setInterval(goToSlide, 2000);
    }

    function pauseCarousel() {
        if (pause) {
            pause.innerHTML = '&#9658;';
        }

        alert("pausing")
        playing = false;
        clearInterval(slideInterval);
    }

});




export default {};
