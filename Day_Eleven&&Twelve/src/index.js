// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
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
const btnPlusNMinus = document.getElementById("btnPlusNMinus");
const btnDivide = document.getElementById("btnDivide");

let calculate = "";
let text1 = "";
let op = "";
let text2 = "";
let result = "";

function selectedBtn(id) {
  //첫번째 피 연산자 구분
  if (op == "") {
    text1 += id;
  } else {
    text1 = result;
    text2 += id;
  } // end of if ~ else


  calculate = text1 + " " + op + " " + text2;    // calculate는 아직 계산 안한 식.
  result = eval(calculate);   // result는 단계 계산 값.
  showText.value = result;

  

  //calculate = calculate +id;
  //showText.value = showText.value + id;
}

function selectedOp(id) {
  op = id;
  //calculate = result + " " + op + " ";
  //console.log(calculate)
  //showText.value = text1 + " " + op + " ";
}

function getResult() {
  result = calculate;

  showText.value = eval(result);

  text1 = eval(result);
  op = "";
  text2 = "";
  result = "";
}

function clearAll() {
  text1 = "";
  text2 = "";
  op = "";
  result = "";
  showText.value = "";
  calculate = "";
}

function init() {
  clearBtn.addEventListener("click", clearAll);
  equal.addEventListener("click", getResult);
  //btn1.addEventListener("click", selectedBtn(1));
  btn1.addEventListener("click", function(){
    selectedBtn(1);
  });
  btn2.addEventListener("click", function(){
    selectedBtn(2);
  });
  btn3.addEventListener("click", function(){
    selectedBtn(3);
  });
  btn4.addEventListener("click", function(){
    selectedBtn(4);
  });
  btn5.addEventListener("click", function(){
    selectedBtn(5);
  });
  btn6.addEventListener("click", function(){
    selectedBtn(6);
  });
  btn7.addEventListener("click", function(){
    selectedBtn(7);
  });
  btn8.addEventListener("click", function(){
    selectedBtn(8);
  });
  btn9.addEventListener("click", function(){
    selectedBtn(9);
  });
  btn0.addEventListener("click", function(){
    selectedBtn(0);
  });

  btnPlus.addEventListener("click", function(){
    selectedOp("+");
  });

  btnMinus.addEventListener("click", function(){
    selectedOp("-");
  });

  btnMulti.addEventListener("click", function(){
    selectedOp("*");
  });

  btnDivide.addEventListener("click", function(){
    selectedOp("/");
  });

}

init();

