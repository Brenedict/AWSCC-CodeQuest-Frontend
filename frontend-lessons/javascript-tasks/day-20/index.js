// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.
   
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)

//    b. All elements with the class "info" using `getElementsByClassName`.
   
const info_class = document.getElementsByClassName('info');
console.log(info_class)

//    c. The element with the ID "header" using `getElementById`.
   
const header_Container = document.getElementById('header');
console.log(header_Container);

//    d. The first element with the class "highlight" using `querySelector`.

const highlight_class = document.querySelector('.highlight');
console.log(highlight_class);


// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".

paragraphs[1].innerText = "This paragraph is now updated!";

// 4. Change the background color of the div with the ID "header" to a different color of your choice.

header_Container.style.backgroundColor = "#9A1DF8";


// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.

const h3 = document.createElement('h3');
h3.innerText = "New Section";

// 6. Append the newly created `h3` element to the end of the body of the HTML document.

const body = document.querySelector('body');
body.appendChild(h3);


// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

header_Container.removeChild(paragraphs[0]);


// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.

header_Container.addEventListener('click', () => {
    console.log("Header clicked!");
});


// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

for (let i = 0 ; i < paragraphs.length ; i++) {
    paragraphs[i].style.backgroundColor = colors[i]; 
}

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*
