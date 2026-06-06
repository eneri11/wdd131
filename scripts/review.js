let count = localStorage.getItem("reviewCount");

count = count ? parseInt(count) : 0;

count++;

localStorage.setItem("reviewCount", count);

document.getElementById("reviewCount").textContent = count;

// Footer Information
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;