document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const directory = document.getElementById('directory');
    let isCardView = true;

    toggleButton.addEventListener('click', function() {
        isCardView = !isCardView;
        renderDirectory();
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            window.membersData = data;
            renderDirectory();
        })
        .catch(error => console.error('Error fetching member data:', error));

    function renderDirectory() {
        directory.innerHTML = '';
        const members = window.membersData;

        if (isCardView) {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            members.forEach(member => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>${member.membershipLevel}</p>
                    <p>${member.description}</p>
                `;
                cardContainer.appendChild(card);
            });
            directory.appendChild(cardContainer);
        } else {
            const listContainer = document.createElement('div');
            listContainer.className = 'list-container';
            members.forEach(member => {
                const listItem = document.createElement('div');
                listItem.className = 'list-item';
                listItem.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>${member.membershipLevel}</p>
                    <p>${member.description}</p>
                `;
                listContainer.appendChild(listItem);
            });
            directory.appendChild(listContainer);
        }
    }
});
