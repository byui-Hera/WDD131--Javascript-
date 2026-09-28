// 1. Functions

function myFunctionName(name) {
    console.log("Your name is " + name);
}


myFunctionName("Hera");
myFunctionName("John");


// 2. Event Listeners

// Retrieve something from the DOM
    
let select = document.querySelector("#theme-select");
// register an event listener
// Event we are listening for, the function to call when that event occurs
select.addEventListener("change", handleEvent);

function handleEvent(event) {
    console.log(event);
    console.log(event.target.value);
}

// 3. If Statements


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}



