import scrollLock from './scroll-Lock';
import focusTrap from './focus-trap';

document.addEventListener("DOMContentLoaded", function () {
    const modalTrigger = document.querySelector(".modal-trigger");
    const modalCover = document.querySelector(".modal-cover");
    const modalClose = document.querySelector(".close-modal");
    const modal = document.querySelector('.modal');

    // Get the prior focused element before the modal is opened
    const priorFocusedElement = document.activeElement && document.activeElement as HTMLElement;

    if (modal) {
        if (modalCover) {
            if (modalTrigger) {

                modalTrigger.addEventListener("click", function () {
                    // Show the modal cover
                    modalCover.classList.add("cover-displayed");

                    // Lock the focus to elements within the modal and focus on first element
                    focusTrap.enable(modal);

                    // Lock the scrollability of body
                    scrollLock.enable();
                });
            }

            if (modalClose && priorFocusedElement) {
                modalClose.addEventListener("click", function () {
                    // Hide the modal cover
                    modalCover.classList.remove("cover-displayed");

                    // Remove lock on focus within modal elements
                    focusTrap.disable(priorFocusedElement);
                });
            }
        }
    }
});

export default {};