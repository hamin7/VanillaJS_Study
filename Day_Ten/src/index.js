// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.getElementById("js-selectNumber");
const button = document.getElementById("button");
const choose = document.querySelector(".js-choose");
const win = document.querySelector(".js-win");
const range = document.querySelector(".js-range");
const rangeBar = document.querySelector(".slider_range");

const SELECTED_NB = "selectedNumber";
const MACHINECHOICE = "machineChoice";

function paintChoose(user, machine) {
  form.classList.remove(SELECTED_NB); // 이거 무슨 기능?
  choose.classList.add(SELECTED_NB);
  //console.log(machine);
  const userChoice = parseInt(user);
  const machineChoice = parseInt(machine);
  choose.innerText = `You choose: ${userChoice}, the machine choose: ${machineChoice}`;
  //console.log(userChoice, machineChoice);
  if (userChoice >= machineChoice) {
    win.innerText = `You Win`;
  } else if (userChoice === machineChoice) {
    win.innerText = `Draw`;
  } else if (userChoice <= machineChoice) {
    win.innerText = `You lost!`;
  }
}

function loadMachineChoice() {
  const loadedMachineChoice = localStorage.getItem(MACHINECHOICE);
  if (loadedMachineChoice !== null) {
    //console.log(loadedMachineChoice);
    return loadedMachineChoice;
  }
  //return loadedMachineChoice;
}

function makeRandom(max) {
  const min = 0;
  //console.log(max);
  const RandVal = Math.floor(Math.random() * (max - min + 1)) + min;
  //console.log(RandVal);
  return RandVal;
}

function machineChoice(rangeMax) {
  const max = rangeMax;
  const machineChoice = makeRandom(max);
  localStorage.setItem(MACHINECHOICE, machineChoice);
}

function handleFormSubmit(event) {
  machineChoice(rangeBar.value);
  const computerChoice = loadMachineChoice();
  const selectedNumber = form.value;
  //console.log(selectedNumber);
  //console.log(computerChoice);
  paintChoose(selectedNumber, computerChoice);
}

function init() {
  button.addEventListener("click", handleFormSubmit);
  range.innerText = `Generate a Number between 0 and ${rangeBar.value}`;
  rangeBar.addEventListener(
    "input",
    function() {
      range.innerText = `Generate a Number between 0 and ${rangeBar.value}`;
    },
    false
  );
}

init();
