// Select the HTML elements
const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");


// Get the current year using the Date object
const today = new Date();

// Dynamically display the current year
currentYear.innerHTML = today.getFullYear();


// Dynamically display the date the document was last modified
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;