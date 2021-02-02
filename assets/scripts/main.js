// FAQ accordian js
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// login tab section
function infofunc(e, info) {
  var i, content, links;
  content = document.getElementsByClassName("loginhome-tabbody");
  for (i = 0; i < content.length; i++) {
     content[i].style.display = "none";
  }
  links = document.getElementsByClassName("loginhome-tabbutton");
  for (i = 0; i < links.length; i++) {
     links[i].className = links[i].className.replace(" activetab", "");
  }
  document.getElementById(info).style.display = "block";
  e.currentTarget.className += " activetab";
}
document.getElementById("currenttab").click();