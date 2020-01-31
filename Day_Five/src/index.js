import "./styles.css";

// You're gonna need this
//const NINE_HOURS_MILLISECONDS = 32400000;

const d_day = document.querySelector("d_day");
//const current = document.querySelector("current");

function getTime() {
  // Don't delete this.
  const now = new Date();
  /*
  const days = now.getDay();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const seconds = now.getSeconds();

  current.innerText = `${days}d${hours < 10 ? `0${hours}` : hours}h${
    minutes < 10 ? `0${minutes}` : minutes
  }m${seconds < 10 ? `0${seconds}` : seconds}s`;
  */
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const gap = xmasDay.getTime() - now.getTime();

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  d_day.innerText = `${days}d${hours < 10 ? `0${hours}` : hours}h${
    minutes < 10 ? `0${minutes}` : minutes
  }m${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
