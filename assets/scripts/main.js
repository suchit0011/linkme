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
// document.getElementById("currenttab").click();


// ---------------------------------------------

function changeImage(urls) {
  console.log('check change',urls);
  document.querySelector('img[name="edit-save"]').src = urls;
 
}


// -----------------------------------------------



var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  addImage(this);
});

function addImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

// -----------------------------------------------

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  var x = document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = "#EEEEEE";

}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  var x = document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = "white";
}