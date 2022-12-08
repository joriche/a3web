// By Amanda 
// External javascript file to be referenced on index page

// Adapted from w3schools
// Change text function
// Changes html content upon event / clicking of button
// Functions defined in javascript file, to be called in main html file
function changeTxt() {
  document.getElementById("javstxt").innerHTML = "Just kidding";
}
function changeClr(x) {
  x.style.color='red'
}
function normClr(x) {
  x.style.color='black'
}
