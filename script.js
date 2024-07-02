const d = new Date();
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = document.getElementById('day');


day.innerText = daysOfTheWeek[d.getDay()];

const showCurrentTimeUTC = () => {
    let time = document.getElementById("time");
    let spanYear = document.getElementById("year");
    // Get the current date and time in UTC
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    const hours = String(d.getUTCHours()).padStart(2, "0");
    const minutes = String(d.getUTCMinutes()).padStart(2, "0");
    const seconds = String(d.getUTCSeconds()).padStart(2, "0");

    const currentTimeUTC = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    time.innerText = currentTimeUTC;

    spanYear.innerText = year;
}

showCurrentTimeUTC();






