const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

const select = document.getElementById("product");

products.forEach(p => {
  const option = document.createElement("option");
  option.value = p.id;      // REQUIRED: id as value
  option.textContent = p.name; // REQUIRED: name as display
  select.appendChild(option);
});

// Footer Information
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;