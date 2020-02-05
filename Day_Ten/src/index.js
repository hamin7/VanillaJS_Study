// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.getElementById("js-selectNumber");
const input = form.querySelector("input");
const choose = document.querySelector(".js-choose");
const win = document.querySelector(".js-win");

const SELECTED_NB = "selectedNumber";

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
    const computerChoice = makeRandom(0,10000);
    if(selectedNumber === null){
        // she is not
    } else {
        // she is
        paintChoose(selectedNumber, computerChoice);
    }
}

function handleFormSubmit(event){
    const computerChoice = makeRandom(0,10000);
    const selectedNumber = input.value;
    console.log(selectedNumber);
    paintChoose(selectedNumber, computerChoice);
}

function makeRandom(min, max) {
    const RandVal = Math.floor(Math.random()*(max-min+1)) + min;
    return RandVal;
}

function init(){
}

init();
