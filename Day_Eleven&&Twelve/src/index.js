// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const showText = document.getElementById("showText");
const clearBtn = document.getElementById("clearBtn");
const equal = document.getElementById("equal");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnPlus = document.getElementById("btnPlus");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnMinus = document.getElementById("btnMinus");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnMulti = document.getElementById("btnMulti");
const btn0 = document.getElementById("btn0");
const btnDivide = document.getElementById("btnDivide");

let calculate = "";
let temp = "";
let Element1 = "";
let Element2 = "";
let op = "";
let result = "";
let isFirstOperator = true;
let equalNotAppeared = true;

function selectedBtn(id) {
  temp += id;
  showText.value = temp;
}

function selectedOp(id) {
  if (isFirstOperator) {
    if (equalNotAppeared) {
      // =의 결과 나온 후 계속 계산하는 경우.
      result = temp; // result는 중간 결과
    }
    isFirstOperator = false;
  } else {
    Element1 = result; // 중간 계산 결과를 Element1에 담고
    Element2 = temp; // 두번째 피연산자를 Elment2에 넣기.
    calculate = Element1 + " " + op + " " + Element2; // calculate는 아직 계산 안한 식.
    console.log(calculate);
    result = eval(calculate); // result는 단계 계산 값.
  }
  showText.value = result; // 중간결과값 보여주기.
  temp = ""; // temp 초기화
  op = id; // 다음에 할 연산.
}

function getResult() {
  Element1 = result; // 중간 계산 결과를 Element1에 담고
  Element2 = temp; // 두번째 피연산자를 Elment2에 넣기.
  calculate = Element1 + " " + op + " " + Element2; // calculate는 아직 계산 안한 식.
  console.log(calculate);
  result = eval(calculate); // result는 단계 계산 값.
  showText.value = result; // 중간결과값 보여주기.
  temp = ""; // temp 초기화
  isFirstOperator = true;
  equalNotAppeared = false;
}

// 초기화 함수.
function clearAll() {
  calculate = "";
  temp = "";
  Element1 = "";
  Element2 = "";
  op = "";
  result = "";
  isFirstOperator = true;
  equalNotAppeared = true;
  showText.value = result;
  console.log(temp);
}

function init() {
  clearBtn.addEventListener("click", clearAll);
  equal.addEventListener("click", getResult);
  //btn1.addEventListener("click", selectedBtn(1));
  btn1.addEventListener("click", function() {
    selectedBtn(1);
  });
  btn2.addEventListener("click", function() {
    selectedBtn(2);
  });
  btn3.addEventListener("click", function() {
    selectedBtn(3);
  });
  btn4.addEventListener("click", function() {
    selectedBtn(4);
  });
  btn5.addEventListener("click", function() {
    selectedBtn(5);
  });
  btn6.addEventListener("click", function() {
    selectedBtn(6);
  });
  btn7.addEventListener("click", function() {
    selectedBtn(7);
  });
  btn8.addEventListener("click", function() {
    selectedBtn(8);
  });
  btn9.addEventListener("click", function() {
    selectedBtn(9);
  });
  btn0.addEventListener("click", function() {
    selectedBtn(0);
  });

  btnPlus.addEventListener("click", function() {
    selectedOp("+");
  });

  btnMinus.addEventListener("click", function() {
    selectedOp("-");
  });

  btnMulti.addEventListener("click", function() {
    selectedOp("*");
  });

  btnDivide.addEventListener("click", function() {
    selectedOp("/");
  });
}

init();
