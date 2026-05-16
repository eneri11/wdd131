// FOOTER YEAR

const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

// LAST MODIFIED

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// HAMBURGER MENU

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

navMenu.classList.add("hide");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("hide");

    if (navMenu.classList.contains("hide")) {
        menuButton.textContent = "☰";
    } else {
        menuButton.textContent = "✖";
    }

});