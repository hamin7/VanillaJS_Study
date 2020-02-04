// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const PENDINGS_LS = "pendings"; // pending localStorage.
const FINISHED_LS = "finisheds"; // finished localStorage.

let pendings = [];
let finisheds = [];

// finished를 삭제하는 함수.
function deleteFinished() {
  const btn = event.target; // 어떤 버튼이 클릭 되었는지 알기 위해 event.target.
  const li = btn.parentNode; // id 비교하기 위해 parentNode.
  finishedList.removeChild(li); // target의 parentNode인 li를 제거.

  const cleanFinisheds = finisheds.filter(function(finished) {
    return finished.id !== parseInt(li.id);
  });
  finisheds = cleanFinisheds;
  saveFinisheds();
}

//  pending을 삭제하는 함수.
function deletePending(event) {
  const btn = event.target; // 어떤 버튼이 클릭 되었는지 알기 위해 event.target.
  const li = btn.parentNode; // id 비교 하기 위해 parentNode.
  pendingList.removeChild(li); // target의 parentNode인 li를 제거.

  const claenPendings = pendings.filter(function(pending) {
    return pending.id !== parseInt(li.id);
  });
  pendings = claenPendings; // pendings는 이전 것이고, cleanPendings는 새로운 것.
  savePendings();
}

// finisheds를 가져와서 localStorage에 저장하는 함수.
function saveFinisheds() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}

// pendings를 가져와서 localStorage에 저장하는 함수.
function savePendings() {
  localStorage.setItem(PENDINGS_LS, JSON.stringify(pendings));
}

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinished); // 클릭하면 deleteFinished 함수 실행.

  const span = document.createElement("span");
  const newId = finisheds.length + 1; // finisheds 배열의 길이 + 1 이 새로운 id.
  span.innerText = text;
  li.appendChild(span); // li에 text인 span이 먼저 나오고.
  li.appendChild(delBtn); // 그 후에 delBtn❌이 붙음.
  li.id = newId; // ❌눌렀을 때 어느것을 삭제해야 할 지 알아야 하기 때문에 id 붙이기.
  finishedList.appendChild(li);

  // finishedObj라는 오브젝트는 localStorage에도 finisheds 저장해야 하기 때문에 만듬.
  const finishedObj = {
    id: newId, // id라는 key.
    text: text // text라는 key.
  };
  finisheds.push(finishedObj); // finisheds 배열에 element 하나 push.
  saveFinisheds(); // localStorage에 저장하는 finisheds 함수 호출.
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deletePending); // 클릭하면 deletePending 실행.

  const span = document.createElement("span");
  const newId = pendings.length + 1; // pendings 배열의 길이 + 1 이 새로운 id.
  span.innerText = text;
  li.appendChild(span); // li에 text인 span이 먼저 나오고.
  li.appendChild(delBtn); // 그 후에 delBtn❌이 붙음.
  li.id = newId; // ❌눌렀을 때 어느것을 삭제해야 할 지 알아야 하기 때문에 id 붙이기.
  pendingList.appendChild(li);

  // pendingObj라는 오브젝트는 localStorage에도 pendings 저장해야 하기 때문에 만듬.
  const pendingObj = {
    id: newId, // id라는 key.
    text: text // text라는 key.
  };
  pendings.push(pendingObj); // pendings 배열에 element 하나 push.
  savePendings(); // localStorage에 저장하는 savePendings 함수 호출.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPending(currentValue);
  toDoInput.value = "";
}

function loadFinisheds() {
  const loadFinisheds = localStorage.getItem(FINISHED_LS); // finisheds 가져오기.
  if (loadFinisheds !== null) {
    const parsedFinisheds = JSON.parse(loadFinisheds);
    parsedFinisheds.forEach(function(finished) {
      paintFinished(finished.text); // 각각의 finished.text에 대하여 paintToDo 실행.
    });
  }
}

function loadPendings() {
  const loadPendings = localStorage.getItem(PENDINGS_LS); // pendings 가져오기.
  if (loadPendings !== null) {
    const parsedPendings = JSON.parse(loadPendings);
    // console.log(parsedPendings);
    parsedPendings.forEach(function(pending) {
      paintPending(pending.text); // 각각의 pending.text에 대하여 paintToDo 실행.
    });
  }
}

function init() {
  loadPendings();
  loadFinisheds();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
