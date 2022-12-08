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
function changeClr() {
    style-color='yellow';
}
function normClr() {
  style-color='white';
}
// Change text size function
function bigTxt() {
  document.getElementById('big').style.fontSize='100px';
}
// Alert functions
// Causes alert upon event
function alrt() {
  alert("JavaScript alert");
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
  alert("Have you seen my baseball?");
}

// Alert function for Spatial Analysis Page
function meow() {
  alert("Have you seen my Dad?");
}

