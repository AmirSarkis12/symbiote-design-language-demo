import scrollLock from './scroll-Lock';

// Simple vanilla JS code to get the menu links and click outs holding together
document.addEventListener('DOMContentLoaded', function () {
    const dropDown = document.querySelector('.nav__drop-down-link__toggle');
    const dropDownList = document.querySelector('.nav__drop-down-list');
    const navToggleCheckbox = document.querySelector('.nav-toggle-checkbox');
    const darkenOverlay = document.querySelector('.darken-overlay');

    // Listen for all clicks on the document
    document.addEventListener('click', function (event) {

        // Toggle drop down list visibility on drop down click
        if (event.target === dropDown) {
            dropDown.classList.toggle('nav__drop-down-list--visible');
        }

        // Hide drop down list when click occurs outside of drop down or drop down list
        if (event.target !== dropDown && event.target !== dropDownList) {
            dropDown.classList.remove('nav__drop-down-list--visible');
        }
    }, false);

    navToggleCheckbox.addEventListener('change', function () {
        if (this.checked) {
            darkenOverlay.classList.add('darken-overlay--visible')
            scrollLock.enable();
        } else {
            darkenOverlay.classList.remove('darken-overlay--visible')
            scrollLock.disable();
        }
    });
}, false);

