// TEMPLE ARRAY

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },

  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },

  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ADDITIONAL TEMPLES

  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-13009-main.jpg"
  },

  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37763-main.jpg"
  },

  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-1101-main.jpg"
  }
];

// SELECT HTML ELEMENT

const gallery = document.querySelector(".gallery");
console.log("Gallery:", gallery);
console.log("Temple count:", temples.length);

// CREATE TEMPLE CARDS

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");

        const image = document.createElement("img");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");

        image.setAttribute("loading", "lazy");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        name.textContent = temple.templeName;

        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        gallery.appendChild(card);

    });
}

// DISPLAY ALL TEMPLES

displayTemples(temples);

// NAVIGATION FILTERS

const pageTitle = document.querySelector("#pageTitle");

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {

    pageTitle.textContent = "Old Temples";

    displayTemples(
        temples.filter(
            temple => Number(temple.dedicated.split(",")[0]) < 1900)
        );
});

document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";

    displayTemples(
        temples.filter(
            temple => Number(temple.dedicated.split(",")[0]) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";

    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );
});

// FOOTER

document.querySelector("#currentYear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// HAMBURGER MENU

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (window.innerWidth < 768) {
    navMenu.classList.add("hide");
} 

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("hide");

    menuButton.textContent = 
        navMenu.classList.contains("hide")
        ? "☰"
        : "✖";
    });

    window.addEventListener("resize", () => {

    if (window.innerWidth >= 768) {
        navMenu.classList.remove("hide");
    } else {
        navMenu.classList.add("hide");
        menuButton.textContent = "☰";
    }
});