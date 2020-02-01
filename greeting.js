const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");    // querySelector는 원하는 셀렉터는 중 첫번쨰 것 가져옴.

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);    // localStorage는 urls을 기초로 작동. 
}
// 누군가 submit 한다면 currentValue로 paingGreeting 및 saveName 해주자.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        // she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
