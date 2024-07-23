document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form inputs
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const comment = document.getElementById('contact-comment').value;

    if (!name || !email || !comment) {
        alert('Please fill out all required fields.');
        return;
    }

    // Handle form submission
    alert('Contact form submitted!');
});
