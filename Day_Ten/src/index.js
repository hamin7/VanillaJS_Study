// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.getElementById("js-selectNumber");
const input = form.querySelector("input");
const choose = document.querySelector(".js-choose");
const win = document.querySelector(".js-win");
const range = document.querySelector(".js-range");
const rangeBar = document.querySelector(".slider_range");

const SELECTED_NB = "selectedNumber";
const MACHINECHOICE = "machineChoice";

function loadMachineChoice(){
    const loadedMachineChoice = localStorage.getItem(MACHINECHOICE);
    if(loadedMachineChoice !== null){
        const paredMachineChoice = JSON.parse(loadedMachineChoice);
        console.log(parsedMachineChoice)
    }
    //return loadedMachineChoice;
}

function saveMachineChoice(machineChoice){
    localStorage.setItem(MACHINECHOICE, machineChoice);
}

/*
function showSliderValue(sVal){
    console.log(sVal)
    //range.innerText = `Generate a Number between 0 and ${this.sVal}`
}
*/

function paintChoose(user, machine){
    form.classList.remove(SELECTED_NB);     // 이거 무슨 기능?
    choose.classList.add(SELECTED_NB);
    choose.innerText = `You choose: ${user}, the machine choose: ${machine}`
    if(user > machine){
        win.innerText = `You Win`
    } else if(user === machine) {
        win.innerText = `Draw`
    } else if(user < machine) {
        win.innerText = `You Loose`
    } else {
        win.innerText = `Fuck`
    }
}

function loadChoose(){
    const selectedNumber = localStorage.getItem(SELECTED_NB);
    const computerChoice = makeRandom();
    if(selectedNumber === null){
    } else {
        paintChoose(selectedNumber, computerChoice);
    }
}

function handleFormSubmit(event){
    const computerChoice = makeRandom();
    const selectedNumber = input.value;
    //console.log(selectedNumber);
    paintChoose(selectedNumber, computerChoice);
}

function makeRandom() {
    const min = 0;
    const max = loadMachineChoice;
    console.log(max)
    const RandVal = Math.floor(Math.random()*(max-min+1)) + min;
    return RandVal;
}

function init(){
    rangeBar.addEventListener("input", function(){
        range.innerText = `Generate a Number between 0 and ${rangeBar.value}`;
        saveMachineChoice(rangeBar.value);

    }, false);
}

init();
