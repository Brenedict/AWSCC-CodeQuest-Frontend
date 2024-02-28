// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

// Temperature Check
let temperature = 32;

if (temperature > 30) {
    console.log("The weather today is quite hot.");
} else {
    console.log("The weather today is quite nice.");
}

// Time Check
let time = 12;

if (time >= 4 && time < 12) 
    console.log("Good Morning!");
 
else if (time >= 12 && time < 18) 
    console.log("Good Afternoon!");
 
else 
    console.log("Good Evening!")


// Day Check
let day = "Wednesday";
day = day.toUpperCase();

switch(day) {
    case "MONDAY":
        console.log(`Today is ${day}, goodluck.`);
        break;
    case "TUESDAY":
        console.log(`Today is ${day}, at least monday is done.`);
        break;  
    case "WEDNESDAY":
        console.log(`Today is ${day}, halfway there.`);
        break;
    case "THURSDAY":
        console.log(`Today is ${day}, it's close.`);
        break;
    case "FRIDAY":
        console.log(`Today is ${day}, one more day.`);
        break;
    case "SATURDAY":
        console.log(`Today is ${day}, finally!`)
        break;
    case "SUNDAY":
        console.log(`Today is ${day}, tomorrow is monday.`)
        break;
  }

