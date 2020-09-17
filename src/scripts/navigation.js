// Simple vanilla JS code to get the menu links and click outs holding together
document.addEventListener('DOMContentLoaded', function () {
    var dropDown = document.querySelector('.nav__drop-down-link__toggle');
    var dropDownList = document.querySelector('.nav__drop-down-list');

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
}, false);

