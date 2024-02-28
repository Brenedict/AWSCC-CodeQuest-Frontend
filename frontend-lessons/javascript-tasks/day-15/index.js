// JavaScript Fundamentals - Day 15: Assignment

// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.
// 2. Create an array named `cookies` with different types of cookies (strings).
// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.

for (let i = 1 ; i <= 5; i++) {
    console.log(i);
}

let cookies = ["Chocolate", "Hazelnut", "Oatmeal Raisin", "Gingerbread", "Peanut Butter", "Macarons", "Crinkles"];
for (cookie of cookies) {
    console.log(cookie + " cookie");
}

let jarNotEmpty = true;

while (!jarNotEmpty) {
    for (cookie of cookies) {
        console.log(`Eating a ${cookie} cookie.`);
    }
    // Infinite loop prevention
    break;
}