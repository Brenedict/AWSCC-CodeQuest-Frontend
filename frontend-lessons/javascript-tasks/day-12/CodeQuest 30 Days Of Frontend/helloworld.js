// JavaScript Fundamentals - Day 12: Assignment

// Browser Console Experimentation
//
// 1. Open Google Chrome on your computer.
// 2. Choose a website to experiment with (e.g., [AWS Cloud Club - PUP Manila](https://www.facebook.com/AWSCloudClubPUPManila)).
// 3. Open the browser console using one of the following methods:
//     - Right-click anywhere on the webpage (excluding images or links) and select "Inspect" or "Inspect Element" Then, navigate to the "Console" tab.
//     - Use shortcuts:
//         - Mac: Command+Option+I
//         - Windows: Ctrl+Shift+I
// 4. Write JavaScript code snippets in the console and observe the results. Try simple commands like `console.log("Hello, JavaScript!");`.

// Adding JavaScript to a Web Page
// External Scripts:
// 1. Create a JavaScript file (e.g., "helloworld.js") with a log statement.
// 2. Link the external scripts to an HTML file.
// 3. Open the browser console and observe the combined output.
const button = document.querySelector("#bttn");
const hexValue = document.querySelector(".hexValue");
const body = document.querySelector("body");

button.addEventListener("click", changeHex);

let hexadecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeHex() {
    let hex = "#";
    for (let i = 1;i<=6;i++) {
        let random = Math.floor(Math.random()*16);
        hex += hexadecimals[random];
    }
    hexValue.textContent = hex;
    body.style.backgroundColor = hex;

    //Tracks all generated hexadecimal codes on the console
    console.log(`Generated Hexadecimal: ${hex}`);
}