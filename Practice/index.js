const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
      {
        name: "Kimchi",
        fatty: false
      },
      {
        name: "Cheese burger",
        fatty: true
      }
    ]
  }
  //console.log(console)
  //console.log(nicoInfo, console)
  
  function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
  }
  
  const greetNicolas = sayHello("Nicolas", 15);
  
  //console.log(greetNicolas)
  
  const calculator = {
    plus: function(){
      const numberOfArgs = arguments.length;
      let result = arguments[0];
      if(numberOfArgs === 0){
        return (result = 0);
      }else{
        for(let i = 1; i < arguments.length; i++){
          result += arguments[i];
        }
        return result;
      }
    },
    minus:function(){
      const numberOfArgs = arguments.length;
      let result = arguments[0];
      if(numberOfArgs === 0){
        return (result = 0);
      }else{
        for(let i = 1; i < arguments.length; i++){
          result -= arguments[i];
        }
        return result;
      }
    },
    multiply:function(){
      const numberOfArgs = arguments.length;
      let result = arguments[0];
      if(numberOfArgs === 0){
        return (result = 0);
      }else{
        for(let i = 1; i < arguments.length; i++){
          result *= arguments[i];
        }
        return result;
      }
    },
    divide:function(){
      const numberOfArgs = arguments.length;
      let result = arguments[0];
      if(numberOfArgs === 0){
        return (result = 0);
      }else{
        for(let i = 1; i < arguments.lenth; i++){
          result /= arguments[i];
        }
        return result;
      }
    },
    power:function(a, b){
      a ** b;
    }
  }
  
  const plus = calculator.plus(5, 6);
  //console.log(plus)
  
  //console.log(document);
  
  //const title = document.getElementById("title");
  const title = document.querySelector("#title");    // id로 선택해보겠다, #으로 (css 선택자랑 비슷)
  title.innerHTML = "Hi! From JS";
  title.style.color = "red";
  //console.dir(document)
  document.title = "I own you now";

  /*
  function handleResize(){
      console.log("I have been resized")
  }
  */

  function handleResize(event){
      console.log(event);
  }

  window.addEventListener("resize", handleResize);     // 이벤트를 받기를 기다림.

  function handleClick(){
      title.style.color = "blue";
  }

  title.addEventListener("click", handleClick);