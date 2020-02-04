const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // ToDos LocalStorage

// 이 array는 object가 있고 그 object는 숫자로 된 id가 있다.
let toDos = [];

// ToDo를 삭제하는 함수.
function deleteToDo(event) {
  // console.dir(event.target.parentNode); // 어떤 버튼이 클릭되었는지 알기 위해 event.target.
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);   // target의 parentNode인 li를 제거.

  // 마치 forEach에서 function을 실행하는것 같이 각각의 item과 같이 실행 될 것.
  // filter는 array 안에 있는 모든 toDos를 통해 filterFn 함수를 실행.
  const cleanToDos = toDos.filter(function(toDo){
    // toDo의 id는 숫자이고, li의 id는 string.
    // 모든 toDos가 li의 id와 같지 않을 때.
    return toDo.id !== parseInt(li.id);
  });   // cleanToDos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것.
  toDos = cleanToDos;    // toDos는 이전 것이고, cleanToDos는 새로운 것.
  saveToDos();    // toDos를 저장.
}

// toDos를 가져와서 localStorage에 저장하는 함수.
function saveToDos() {
  // 자바스크립트는 localStorage에 있는 모든 데이터를 string으로 저장하려고 함.
  // -> 우리는 object가 string이 되도록 만들어야 함.
  // -> JSON.stringify 사용.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); // 클릭하면 deleteToDo 함수 실행.
  const span = document.createElement("span");
  const newId = toDos.length + 1; // toDos 배열의 길이 + 1. 왜냐하면 id는 1부터 시작해야 하기 때문.
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId; // x 눌렀을 때 어느것을 삭제 할 지 알아야 하기 때문에 id를 붙여주자.
  toDoList.appendChild(li);
  // toDoObj라는 오브젝트를 만들자. localStorage에도 toDos 저장해야 하기 때문에.
  const toDoObj = {
    text: text, // text라는 키.
    id: newId
  };
  toDos.push(toDoObj); // toDos 배열에 element 하나 push.
  saveToDos(); // localStorage에 저장하는 saveToDos 함수 호출.
}

function handleSubmit(event) {
  event.preventDefault(); // default가 뭔데 그걸 방지한다는 거임?
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); // toDos 가져오기.
  if (loadedToDos !== null) {
    // console.log(loadedToDos);
    // 참고로 parse는 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object(JSON)로 바꿔주는 기능.
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    // forEach는 기본적으로 함수를 실행하는데 array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것.
    // forEach안에 있는 함수를 parsedToDos에 있는 것들 각각에 대해 실행.
    // forEach는 array를 위한 function.
    parsedToDos.forEach(function(toDo) {
      // console.log(toDo.text);
      paintToDo(toDo.text); // 각각의 toDo.text에 대하여 paintToDo 실행.
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
