const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {

  const select = document.getElementById("product");

  if (select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }

  const currentYear = document.getElementById("currentYear");
  const lastModified = document.getElementById("lastModified");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent =
      `Last Modified: ${document.lastModified}`;
  }
});