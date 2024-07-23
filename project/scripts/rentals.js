async function fetchRentalPrices() {
    try {
        const response = await fetch('data/prices.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const tableBody = document.querySelector('#rental-prices tbody');

        // Clear existing rows
        tableBody.innerHTML = '';

        data.forEach(item => {
            if (item.type && item.maxPersons && item.reservationHalfDay && item.reservationFullDay && item.walkInHalfDay && item.walkInFullDay) {
                const row = `
                    <tr>
                        <td>${item.type}</td>
                        <td>${item.maxPersons}</td>
                        <td>${item.reservationHalfDay}</td>
                        <td>${item.reservationFullDay}</td>
                        <td>${item.walkInHalfDay}</td>
                        <td>${item.walkInFullDay}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            } else {
                console.error('Invalid data format', item);
            }
        });
    } catch (error) {
        console.error('Error fetching rental prices:', error);
        document.querySelector('#rental-prices tbody').innerHTML = '<tr><td colspan="6">Error fetching rental prices. Please try again later.</td></tr>';
    }
}

fetchRentalPrices();
