const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");

        const image = document.createElement("img");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        name.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        card.append(
            image,
            name,
            location,
            dedicated,
            area
        );

        gallery.appendChild(card);
    });
}

displayTemples(temples);

/* FILTERS */

const pageTitle = document.querySelector("#pageTitle");

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";

    displayTemples(
        temples.filter(
            temple => Number(temple.dedicated.split(",")[0]) < 1900
        )
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

/* FOOTER */

document.querySelector("#currentYear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

/* HAMBURGER */

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