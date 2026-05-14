const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

let i = 0;

while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }

  i++;
}

studentReport.forEach(function(score) {
  if (score < LIMIT) {
    console.log(score);
  }
});

for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let today = new Date().getDay();

for (let i = 0; i < DAYS; i++) {
  let nextDay = (today + i) % 7;
  console.log(dayNames[nextDay]);
}
