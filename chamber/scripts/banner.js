document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('meeting-banner');
    const closeButton = document.querySelector('.close-banner');
    
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (day >= 1 && day <= 3) {
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
