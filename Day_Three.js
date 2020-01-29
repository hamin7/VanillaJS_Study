// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mover: function() {
    something[0].innerHTML = "The mouse is here!";
    something[0].style.color = colors[0];
  },
  mout: function() {
    something[0].innerHTML = "The mouse is gone!";
    something[0].style.color = colors[1];
  },
  handleResize: function() {
    something[0].innerHTML = "You just resized!";
    something[0].style.color = colors[2];
  },
  rclick: function() {
    something[0].innerHTML = "That was a right click!";
    something[0].style.color = colors[3];
  }
};

const something = document.getElementsByTagName("h2");
something[0].addEventListener("mouseover", superEventHandler.mover);
something[0].addEventListener("mouseout", superEventHandler.mout);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.rclick);
