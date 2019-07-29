var maxMarks = 75;
var averageMarks = 30;
var obtainMarks = prompt("Enter Your Marks out of 75: ");
if ((maxMarks == obtainMarks) ){
  alert("Excellent you Reached the Highest Marks");
} else if (averageMarks > obtainMarks) {
  alert("You Are Fail");

} else if (averageMarks <= obtainMarks){
  alert("Congrats You Are Pass");
}
