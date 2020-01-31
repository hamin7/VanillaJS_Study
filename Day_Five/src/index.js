import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const d_day = document.querySelector("d_day");

function getTime() {
  // Don't delete this.
  const now = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const gap = xmasDay.getTime() - now.getTime();

  let day = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuate = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((gap % (1000 * 60)) / 1000);

  d_day.innerText = day + "d" + hour + "h" + minuate + "m" + second + "s";
}

function init() {
  setInterval(getTime, 1000);
}
init();
