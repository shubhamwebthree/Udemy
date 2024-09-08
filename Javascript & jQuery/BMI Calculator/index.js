function bmiCalculator(weight, height){

// var bmi = weight / (height * height);
var bmi = weight / Math.pow(height,2);
return (Math.round(bmi));
        
}

var weight = prompt("Enter A Weight");
var height = prompt("Enter A Height");
var bmi = bmiCalculator(weight,height);

alert(Number(bmi));
