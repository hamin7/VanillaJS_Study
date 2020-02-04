const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // ToDos LocalStorage

const toDos = [];

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
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
