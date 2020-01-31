// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleResize: function() {
    if (window.innerWidth <= 400) {
      document.bgColor = colors[1];
    } else if (window.innerWidth >= 400 && window.innerWidth <= 800) {
      document.bgColor = colors[2];
    } else if (window.innerWidth >= 800) {
      document.bgColor = colors[3];
    }
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
