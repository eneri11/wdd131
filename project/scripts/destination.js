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

// DOM container
const cardContainer = document.querySelector('#destination-cards');


// ===============================
// DISPLAY FUNCTION
// ===============================
function displayDestinations(destinationList) {

    cardContainer.innerHTML = '';

    destinationList.forEach(place => {
        console.log(place.name);

        cardContainer.innerHTML += `
            <article class="card">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                
                <h3>${place.name}</h3>
                
                <p>${place.description}</p>
                
                <p><strong>Category:</strong> ${place.category}</p>

                <button class="favorite-btn" data-name="${place.name}">
                    ❤ Save Favorite
                </button>
            </article>
        `;
    });

    // Add favorite button events
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', () => {
            const favoritePlace = button.dataset.name;

            localStorage.setItem('favoriteDestination', favoritePlace);

            alert(`${favoritePlace} saved as your favorite destination!`);
        });
    });
}


// ===============================
// FILTER FUNCTION
// ===============================
function filterDestinations(category) {

    if (category === 'All') {

        displayDestinations(destinations);

    } 
    else {

        const filteredPlaces = destinations.filter(place =>
            place.category === category
        );

        const beaches =
            destinations.filter(place =>
            place.category === 'Beach'
    );

        displayDestinations(filteredPlaces);
    }
}


// ===============================
// INITIAL LOAD
// ===============================
displayDestinations(destinations);


// ===============================
// BUTTON EVENTS
// ===============================


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

document.querySelectorAll('.favorite-btn').forEach(button => {

    button.addEventListener('click', () => {

        const favoritePlace = button.dataset.name;

        localStorage.setItem(
            'favoriteDestination',
            favoritePlace
        );

        alert(
            `${favoritePlace} saved as favorite destination!`
        );
    });

});

const savedFavorite =
    localStorage.getItem('favoriteDestination');

if (savedFavorite) {

    const favoriteMessage =
        document.querySelector('#favorite-message');

    favoriteMessage.textContent =
        `Your favorite destination is ${savedFavorite}.`;
}