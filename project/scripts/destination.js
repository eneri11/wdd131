const destinations = [
    {
        name: 'Palawan',
        category: 'Beach',
        image: 'images/palawanhide.webp',
        description: 'Beautiful beaches and clear waters.'
    },
    {
        name: 'Baguio',
        category: 'Mountain',
        image: 'images/park_baguio.webp',
        description: 'Cool climate and mountain scenery.'
    },
    {
        name: 'Vigan',
        category: 'Historical',
        image: 'images/calesa_vigan.webp',
         description: 'Historic Spanish colonial town.'
    }
];

const cardContainer = document.querySelector('#destination-cards');

function displayDestinations(destinationList) {

            cards.innerHTML += `
            <article class="card">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <p>${place.category}</p>
            </article>
            `;

    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const favoritePlace = button.dataset.name;

            localStorage.setItem('favoriteDestination', favoritePlace);

            alert(`${favoritePlace} saved as favorite destination.`);
        });
    });
}
y === category

        displayDestinations(filteredPlaces);
   
function filterDestinations(category) {

    if (category === 'All') {
        displayDestinations(destinations);
    } else {

        const filteredPlaces = destinations.filter(place =>
            place.category }
}

displayDestinations(destinations);


document.querySelector('#all').addEventListener('click', () => {
    filterDestinations('All');
});


document.querySelector('#beach').addEventListener('click', () => {
    filterDestinations('Beach');
});


document.querySelector('#mountain').addEventListener('click', () => {
    filterDestinations('Mountain');
});


document.querySelector('#historical').addEventListener('click', () => {
    filterDestinations('Historical');
});