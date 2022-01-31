const months = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'June',
    'July', 'Aug', 'Sept',
    'Oct', 'Nov', 'Dec'
];

const weekdays = [
    '', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
]

// holiday date
const holidayDate = document.querySelector('.holiday-date');
const countTiles = document.querySelector('.count-tiles');


// countdown tiles D/H/M/S
const daysTile = document.querySelector('.days');
const hoursTile = document.querySelector('.hours');
const minsTile = document.querySelector('.mins');
const secsTile = document.querySelector('.secs');

// holiday dates
let xmas = new Date(2022, 11, 24, 24, 0, 0);

const yearXmas = xmas.getFullYear();

let monthXmas = xmas.getMonth();
monthXmas = months[monthXmas];

const dateXmas = xmas.getDate();
const weekdayXmas = weekdays[xmas.getDay()];

holidayDate.textContent = `${yearXmas}, ${monthXmas} ${dateXmas}, ${weekdayXmas}`;


const xmasTime = xmas.getTime();

function getRemainTime() {
    const today = new Date().getTime();
    const time = xmasTime - today;

    //  DAY HOUR MINUTE
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let xmasDay = Math.floor(time / oneDay);
    let xmasHour = Math.floor((time % oneDay) / oneHour);
    let xmasMin = Math.floor((time % oneHour) / oneMinute);
    let xmasSecs = Math.floor((time % oneMinute) / 1000);
    
    daysTile.innerHTML = xmasDay;
    hoursTile.innerHTML = xmasHour;
    minsTile.innerHTML = xmasMin;
    secsTile.innerHTML = xmasSecs;


    if (time < 0){
        clearInterval(countDown);
        countTiles.innerHTML = `<h4 class="expired">See You Next Year!</h4>`
    }
}

let countDown = setInterval(getRemainTime, 1000);

getRemainTime();
