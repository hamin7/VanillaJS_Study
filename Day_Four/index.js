const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    //const currentClass = title.className;
    /*
    if(currentClass !== CLICKED_CLASS){
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    } else {
        //title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }
    */
   /*
   if(hasClass){
       title.classList.remove(CLICKED_CLASS);
    }else {
        title.classList.add(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
