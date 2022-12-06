// By Amanda 
// External javascript file to be referenced on index page

<!DOCTYPE html>
<html>
<body>
  
// Adapted from w3schools
// Change color function
// Changes color of h1 text when mouse passes over 
<h1 onmouseover="style.color='FFC300'" onmouseout="style.color='black'">SQjr</h1>

// Adapted from w3schools
// Change text function
// Changes html content upon event / clicking of button
// Functions defined in javascript file, to be called in main html file
function changeTxt() {
  document.getElementById("javstxt").innerHTML = "Just kidding";
}

</body>
</html>
