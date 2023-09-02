const month=document.getElementById("month-name");
const dayName=document.getElementById("day-name");
const dateOfMonth=document.getElementById("date");
const year=document.getElementById("year");



const dateObj = new Date();

month.innerText = dateObj.toLocaleString("en", {
  month: "long",
});

dayName.innerText = dateObj.toLocaleString("en", {
  weekday: "long",
});

dateOfMonth.innerText = dateObj.getDate();

year.innerText = dateObj.getFullYear();
