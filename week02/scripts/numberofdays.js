const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.

const today = new Date();

let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);

document.getElementById("today").innerHTML = 
`Today is <strong>${todaystring}</strong>`;


let i = 1;

while (i <= numberOfDays) {

	const nextday = new Date();

	nextday.setDate(today.getDate() + i);

	let nextdaystring = 
    
    new Intl.DateTimeFormat("en-US", options).format(nextday);

	const item = document.createElement("li");
	item.textContent = nextdaystring;

	document.querySelector("ul").appendChild(item);

	i++;
}