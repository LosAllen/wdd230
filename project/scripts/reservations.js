document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const rentalType = document.getElementById('rental-type').value;
    const date = document.getElementById('date').value;
    const period = document.getElementById('period').value;

    if (!name || !email || !phone || !rentalType || !date || !period) {
        alert('Please fill out all required fields.');
        return;
    }

    // Handle form submission
    alert('Reservation submitted!');
});
