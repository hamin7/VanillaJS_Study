// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleResize: function() {
    if (window.innerWidth <= 400) {
      document.bgColor = "blue";
    } else if (window.innerWidth >= 400 && window.innerWidth <= 800) {
      document.bgColor = "purple";
    } else if (window.innerWidth >= 800) {
      document.bgColor = "yello";
    }
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
