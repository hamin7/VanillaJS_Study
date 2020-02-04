// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const PENDINGS_LS = "pendings"; // pending localStorage.
const FINISHED_LS = "finisheds"; // finished localStorage.

let pendings = [];
let finisheds = [];

// Add task form에 글을 적어 제출하면 Pending에 넣는 함수.
function handleSubmit(event) {
  event.preventDefault(); // 이거 사실 왜 있는지 모르겠음.
  const currentValue = toDoInput.value;
  paintPending(currentValue);
  toDoInput.value = "";
}

// ⏪버튼을 누르면 Finished에서 Pending으로 이동하는 함수.
function moveFinishedToPending(event) {
  event.preventDefault();
  const btn = event.target; // 누른 버튼 가리킴.
  const cancelButton = btn.previousSibling; // 취소버튼 선택.
  const text = cancelButton.previousSibling.textContent; // 이제 span안의 옮길 텍스트 선택.

  paintPending(text);
}

// ✅버튼을 누르면 Pending에서 Finished로 이동하는 함수.
function movePendingToFinished(event) {
  event.preventDefault();
  const btn = event.target; // 누른 버튼 가리킴.
  const cancelButton = btn.previousSibling; // 취소버튼 선택.
  const text = cancelButton.previousSibling.textContent; // 이제 span안의 옮길 텍스트 선택.

  paintFinished(text);
}

// ❌를 누르면 해당항목을 Finished에서 삭제하는 함수.
function deleteFinished(event) {
  const btn = event.target; // 어떤 버튼이 클릭 되었는지 알기 위해 event.target.
  const li = btn.parentNode; // id 비교하기 위해 parentNode.
  finishedList.removeChild(li); // target의 parentNode인 li를 제거.

  const cleanFinisheds = finisheds.filter(function(finished) {
    return finished.id !== parseInt(li.id);
  });
  finisheds = cleanFinisheds;
  saveFinisheds();
}

//  ❌를 누르면 해당항목을 Pending에서 삭제하는 함수.
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

// Finisheds를 가져와서 localStorage에 저장하는 함수.
function saveFinisheds() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}

// Pendings를 가져와서 localStorage에 저장하는 함수.
function savePendings() {
  localStorage.setItem(PENDINGS_LS, JSON.stringify(pendings));
}

// finished에 저장되어 있는 항목을 출력하는 함수.
function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinished); // 클릭하면 deleteFinished 함수 실행.

  const moveBtn = document.createElement("button");
  moveBtn.innerText = "⏪";
  moveBtn.addEventListener("click", moveFinishedToPending);
  moveBtn.addEventListener("click", deleteFinished);

  const span = document.createElement("span");
  const newId = finisheds.length + 1; // finisheds 배열의 길이 + 1 이 새로운 id.
  span.innerText = text;
  li.appendChild(span); // li에 text인 span이 먼저 나오고.
  li.appendChild(delBtn); // 그 후에 delBtn❌이 붙음.
  li.appendChild(moveBtn); // 그 후 moveBtn ✅ 도 붙음.
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

// pending에 저장되어 있는 항목을 출력하는 함수.
function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deletePending); // 클릭하면 deletePending 실행.

  const moveBtn = document.createElement("button");
  moveBtn.innerText = "✅";
  moveBtn.addEventListener("click", movePendingToFinished);
  moveBtn.addEventListener("click", deletePending);

  const span = document.createElement("span");
  const newId = pendings.length + 1; // pendings 배열의 길이 + 1 이 새로운 id.
  span.innerText = text;
  li.appendChild(span); // li에 text인 span이 먼저 나오고.
  li.appendChild(delBtn); // 그 후에 delBtn❌이 붙음.
  li.appendChild(moveBtn); // 그 후 moveBtn ✅ 도 붙음.
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

// localStorage에서 key값이 Finished인 것들을 불러오는 함수.
function loadFinisheds() {
  const loadFinisheds = localStorage.getItem(FINISHED_LS); // finisheds 가져오기.
  if (loadFinisheds !== null) {
    const parsedFinisheds = JSON.parse(loadFinisheds);
    parsedFinisheds.forEach(function(finished) {
      paintFinished(finished.text); // 각각의 finished.text에 대하여 paintToDo 실행.
    });
  }
}

// localStorage에서 key값이 Pending인 것들을 불러오는 함수.
function loadPendings() {
  const loadPendings = localStorage.getItem(PENDINGS_LS); // pendings 가져오기.
  if (loadPendings !== null) {
    const parsedPendings = JSON.parse(loadPendings);
    // console.log(parsedPendings);
    parsedPendings.forEach(function(pending) {
      paintPending(pending.text); // 각각의 pending.text에 대하여 paintPending 실행.
    });
  }
}

function init() {
  loadPendings();
  loadFinisheds();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
