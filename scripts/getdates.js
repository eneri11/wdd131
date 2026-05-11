const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

// Current Year
year.textContent = new Date().getFullYear();

// Last Modified Date
lastModified.textContent =
    `Last Modification: ${document.lastModified}`;