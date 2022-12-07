// By Amanda 
// External javascript file to be referenced on index page

<!DOCTYPE html>
<html>
<body>
  
// Adapted from bobbyhadz.com
// Change color function
// Changes color of text with id = "changeclr", when mouse passes over 
const changeclr = document.getElementById("changeclr");
changeclr.addEventListener("mouseover", function clrMouseOver() {
  changeclr.style.color = "black";
});
changeclr.addEventListener("mouseout", function clrMouseOut() {
  changeclr.style.color = rgb(255, 195, 0);
});

// Adapted from w3schools
// Change text function
// Changes html content upon event / clicking of button
// Functions defined in javascript file, to be called in main html file
function changeTxt() {
  document.getElementById("javstxt").innerHTML = "Just kidding";
}

</body>
</html>
