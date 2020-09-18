document.addEventListener('DOMContentLoaded', function () {
    const notification = document.querySelector('.notification');
    const breadcrumbs = document.querySelector('.breadcrumbs');

    // If notification is in page
    if (notification && notification.previousSibling) {

        // Get the previoius sibling to notification
        const previousElement = notification.previousElementSibling;

        // Check if the previous element is breadcrumbs,
        // if so set the top position of notification to take that in to account, otherwise set top position to just below the nav height.
        if (previousElement) {
            if (previousElement.contains(breadcrumbs)) {
                // 4rem for nav + 2rem for breadcrumbs
                notification.setAttribute("style", "top: 6rem");
            }
            else {
                // 4rem for nav
                notification.setAttribute("style", "top: 4rem");

            }
        }
    }


}, false);

export default {};