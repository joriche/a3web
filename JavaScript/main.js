// By Amanda 
// External javascript file to be referenced on index page
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

// Alert function
// Causes alert upon event
function alrt() {
  alert("JavaScript alert")
}

// Alert function for Geovisualization Page
function meow() {
  alert("Have you seen my baseball?")
}

// Alert function for Spatial Analysis Page
function meow() {
  alert("Have you seen my Dad?")
}

