// Get all the menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add an event listener to detect key presses on each menu item
menuItems.forEach((item, index) => {
    item.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown') {
            // Move focus to the next item
            const nextItem = menuItems[index + 1];
            if (nextItem) {
                nextItem.focus();
            } else {
                // If it's the last item, move to the first
                menuItems[0].focus();
            }
        } else if (event.key === 'ArrowUp') {
            // Move focus to the previous item
            const prevItem = menuItems[index - 1];
            if (prevItem) {
                prevItem.focus();
            } else {
                // If it's the first item, move to the last
                menuItems[menuItems.length - 1].focus();
            }
        }
    });
});
