// By Amanda 
// External javascript file to be referenced on index and programming page
// Functions defined in javascript file, to be called in main html file
// All adapted from w3schools

// Change text function
// Changes html content upon event 
function changeTxt() {
  document.getElementById("javstxt").innerHTML = "Just kidding";
}
// Change color functions
// Changes color of text upon event 
function changeClr(x) {
  x.style.color='red'
}
function normClr(x) {
  x.style.color='white'
}
// Change text size function
function bigTxt() {
  document.getElementById('big').style.fontSize='100px';
}
// Alert functions
// Causes alert upon event
function alrt() {
  alert("JavaScript alert")
}
function inpt() {
  alert("Invalid address");
}
// Key value function
// Change text to key value
function catyrs(event) {
  document.getElementById("cat").innerHTML = event.keyCode;
}



// By Josh
// Alert function for Geovisualization Page
function meow() {
  alert("Have you seen my baseball?")
}

// Alert function for Spatial Analysis Page
function meow() {
  alert("Have you seen my Dad?")
}


// Alex's Content
// Web Gallery
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("description");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

