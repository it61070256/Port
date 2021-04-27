
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nabbar").style.padding = "5px 10px";
    document.getElementById("nabbar").style.backgroundColor = "#262626";
    document.getElementById("me").style.fontSize = "2vw";
    document.getElementById("bar").style.fontSize = "1vw";
    document.getElementById("bar1").style.fontSize = "1vw";
    document.getElementById("bar2").style.fontSize = "1vw";
  } else {
    document.getElementById("nabbar").style.padding = "25px 10px";
    document.getElementById("nabbar").style.backgroundColor = "black";
    document.getElementById("me").style.fontSize = "3vw";
    document.getElementById("bar").style.fontSize = "1.5vw";
    document.getElementById("bar1").style.fontSize = "1.5vw";
    document.getElementById("bar2").style.fontSize = "1.5vw";
  }
}