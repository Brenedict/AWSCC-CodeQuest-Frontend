// JavaScript Fundamentals - Day 13: Assignment

// Task 1: Variable Mastery

// 1. Declare a variable named `currentLesson` and assign it the value 'JavaScript Fundamentals'.
// 2. Print the value of `currentLesson` to the console.

let currentLesson = "JavaScript Fundamentals";
console.log(currentLesson);

// Task 2: Data Types Exploration

// 3. Create a variable named `favoriteNumber` and assign it a number of your choice.
// 4. Create a variable named `favoriteWord` and assign it a string of your choice.
// 5. Create a variable named `isJavaScriptFun` and assign it a boolean value.
// 6. Create a variable named `nothing` and assign it a value of `null`.
// 7. Create a variable named `undefinedVar` without assigning any value to it.

let favoriteNumber = 28;
let favoriteWord = "Luz";
let isJavaScriptFun = true;
let nothing = null;
let undefinedVar;

// Task 3: Logical Operators in Action

// 8. Create two variables, `isMorning` and `isRaining`, and assign them boolean values.
// 9. Use the logical **AND** (`&&`) operator to check if it's morning and raining. Print appropriate messages based on the result.
// 10. Use the logical **OR** (`||`) operator to check if it's either morning or raining. Print appropriate messages based on the result.
// 11. Use the logical **NOT** (`!`) operator to invert the value of `isMorning`. Print the new value.

let isMorning = false;
let isRaining = true;

if (isMorning === true && isRaining === true) {
    console.log("It's a cozy morning grab your blanket and warm drink.");
}

else if (isMorning === true || isRaining === true) {
    if (isMorning === true)
        console.log("The sun is shining, time to start your day.")
    else
        console.log("It's raining, be careful not to get sick.")
}

console.log(`Inverted: ${!isMorning}`);