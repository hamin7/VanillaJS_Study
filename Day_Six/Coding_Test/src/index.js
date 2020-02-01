// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

//const selectElement = document.querySelector(".country");
const country = document.querySelector(".js-select");
// const selectOption = country.options[country.selectedIndex];
let lastSelected = localStorage.getItem("country");

const USER_COUNTRY = "country";

function setCountry() {
  /*
  if (lastSelected) {
    country.value = lastSelected;
  }
  */

  country.onchange = function() {
    lastSelected = country.options[country.selectedIndex].value;
    console.log(lastSelected);
    localStorage.setItem("country", lastSelected);
  };
}

function loadCountry() {
  const userCountry = localStorage.getItem(USER_COUNTRY);
  if (userCountry === null) {
    setCountry();
  } else {
    country.value = lastSelected;
    setCountry();
  }
}

function init() {
  loadCountry();
}

init();
