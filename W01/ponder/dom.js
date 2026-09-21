// How to manipulate the DOM with JavaScript

// Grab our h1 from the page
let heading = document.querySelector('h1');

console.log(heading);

heading.textContent = "Changed the heading to something else!";


// Change the text color
heading.style.color = "#0000FF";


// Pick your own style and change it
heading.style.fontSize = "3rem";
heading.style.border = "1px solid black";


// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
// document.querySelector("#topics").style.color = "red"; - same thing


// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Disc_golf_WTDGC_Varazdin_Croatia_08.jpg/960px-Disc_golf_WTDGC_Varazdin_Croatia_08.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail");



let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function () {
    let codeValue = selectElem.value;
    console.log(codeValue);
})










