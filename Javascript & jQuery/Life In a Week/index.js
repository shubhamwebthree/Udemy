function lifeInWeeks(age){

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 12;
var months = yearsRemaining * 12;

alert("You have " + days + " days, " + weeks + " weeks, " + months + " months left !!")
console.log("You have " + days + " days, " + weeks + " weeks, " + months + " months left !!")
}

lifeInWeeks(prompt("Enter Your Age"));
