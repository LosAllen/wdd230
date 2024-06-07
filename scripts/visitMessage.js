document.addEventListener('DOMContentLoaded', function() {
    const visitMessage = document.getElementById('visit-message');

    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();

    if (!lastVisit) {
        visitMessage.innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const diffTime = Math.abs(currentVisit - lastVisitDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
            visitMessage.innerHTML = "<p>Back so soon! Awesome!</p>";
        } else {
            visitMessage.innerHTML = `<p>You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.</p>`;
        }
    }

    localStorage.setItem('lastVisit', currentVisit);
});
