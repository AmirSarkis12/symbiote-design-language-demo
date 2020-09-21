import scrollLock from './scroll-Lock';
import focusTrap from './focus-trap';

document.addEventListener("DOMContentLoaded", function () {
    const modalTrigger1 = document.querySelector(".modal-trigger-1");
    const modalTrigger2 = document.querySelector(".modal-trigger-2");
    const modalTrigger3 = document.querySelector(".modal-trigger-3");
    const modalTrigger4 = document.querySelector(".modal-trigger-4");

    const modalCover1 = document.querySelector(".modal-cover-1");
    const modalCover2 = document.querySelector(".modal-cover-2");
    const modalCover3 = document.querySelector(".modal-cover-3");
    const modalCover4 = document.querySelector(".modal-cover-4");

    const modalClose1 = document.querySelector(".close-modal-1");
    const modalClose2 = document.querySelector(".close-modal-2");
    const modalClose3 = document.querySelector(".close-modal-3");
    const modalClose4 = document.querySelector(".close-modal-4");

    const modal = document.querySelector('.modal');

    // Get the prior focused element before the modal is opened
    const priorFocusedElement = document.activeElement && document.activeElement as HTMLElement;

    if (modal) {
        if (modalCover1 && modalCover2 && modalCover3 && modalCover4 ) {
            if (modalTrigger1) {

                modalTrigger1.addEventListener("click", function () {
                    // Lock the scrollability of body
                    scrollLock.enable();

                    // Show the modal cover
                    modalCover1.classList.add("cover-displayed");

                    // Lock the focus to elements within the modal and focus on first element
                    focusTrap.enable(modal);


                });
            }

            if (modalTrigger2) {

                modalTrigger2.addEventListener("click", function () {
                    // Lock the scrollability of body
                    scrollLock.enable();

                    // Show the modal cover
                    modalCover2.classList.add("cover-displayed");

                    // Lock the focus to elements within the modal and focus on first element
                    focusTrap.enable(modal);


                });
            }

            if (modalTrigger3) {

                modalTrigger3.addEventListener("click", function () {
                    // Lock the scrollability of body
                    scrollLock.enable();

                    // Show the modal cover
                    modalCover3.classList.add("cover-displayed");

                    // Lock the focus to elements within the modal and focus on first element
                    focusTrap.enable(modal);


                });
            }

            if (modalTrigger4) {

                modalTrigger4.addEventListener("click", function () {
                    // Lock the scrollability of body
                    scrollLock.enable();

                    // Show the modal cover
                    modalCover4.classList.add("cover-displayed");

                    // Lock the focus to elements within the modal and focus on first element
                    focusTrap.enable(modal);
                });
            }

            if (modalClose1 && modalClose2 && modalClose3 && modalClose4 && priorFocusedElement) {
                modalClose1.addEventListener("click", function () {
                    // Unlock the scrollability of body
                    scrollLock.disable();

                    // Hide the modal cover
                    modalCover1.classList.remove("cover-displayed");

                    // Remove lock on focus within modal elements
                    focusTrap.disable(priorFocusedElement);
                });

                modalClose2.addEventListener("click", function () {
                    // Unlock the scrollability of body
                    scrollLock.disable();

                    // Hide the modal cover
                    modalCover2.classList.remove("cover-displayed");

                    // Remove lock on focus within modal elements
                    focusTrap.disable(priorFocusedElement);
                });

                modalClose3.addEventListener("click", function () {
                    // Unlock the scrollability of body
                    scrollLock.disable();

                    // Hide the modal cover
                    modalCover3.classList.remove("cover-displayed");

                    // Remove lock on focus within modal elements
                    focusTrap.disable(priorFocusedElement);
                });

                modalClose4.addEventListener("click", function () {
                    // Unlock the scrollability of body
                    scrollLock.disable();

                    // Hide the modal cover
                    modalCover4.classList.remove("cover-displayed");

                    // Remove lock on focus within modal elements
                    focusTrap.disable(priorFocusedElement);
                });
            }
        }
    }
});

export default {};