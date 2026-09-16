// Declare a variable 
let age = 22;

// Like print() in Python
console.log(age);

// A constant variable - can't be changed
const policyDisclaimer = "Just because you give us money, doesn't mean we have to give it back to you"
console.log(policyDisclaimer);

const username = "billybob";

// Scope = where you can reference a variable by name
if (age == 22) {
    // New Scope
    console.log(username);
    let favoriteColor = "blue";
    console.log(favoriteColor);
    let name = "Dr Java";
    console.log(name);
}

// Grab our H1 from the DOM and change its color to blue
document.querySelector("h1").style.color = "blue";
