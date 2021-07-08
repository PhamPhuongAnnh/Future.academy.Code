// Bài 8
let n = Number(prompt("Your weight in kg?"));
let x = Number(prompt("Your hight in cm?"));
x = x / 100;

let BMI = n / (x * x);
alert(BMI)
if (BMI < 16) {
    console.log(`Your BMI is ${BMI}`);
    console.log("You are severely underweight");
}
else if (BMI <= 18.5) {
    console.log(`Your BMI is ${BMI}`);
    console.log("You are underweight");
}
else if (BMI <= 25) {
    console.log(`Your BMI is ${BMI}`);
    console.log("You are Normal");
}
else if (BMI <= 30) {
    console.log(`Your BMI is ${BMI}`);
    console.log("You are overweight");
}
else {
    console.log(`Your BMI is ${BMI}`);
    console.log("You are obese");
}
