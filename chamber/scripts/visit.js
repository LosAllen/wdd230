// Check if the visit count is already stored in localStorage
if (localStorage.getItem('visitCount')) {
    var visitCount = parseInt(localStorage.getItem('visitCount'));
} else {
    var visitCount = 0;
}

visitCount++;
localStorage.setItem('visitCount', visitCount);

document.getElementById('visit-count').textContent = visitCount;