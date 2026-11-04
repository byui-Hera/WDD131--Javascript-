// 1. Add Event Listener to the button
document.querySelector('#rollButton').addEventListener('click', () => {
    // animate the die
    const images = document.querySelectorAll("#gameboard img");
    images.forEach(image => {
        // switch the src to the die_rolling.gif animation
        if (isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })
    // change the value each die lands on randomly
    // changing the src image
    
    setTimeout(() => {
        // run what is in here after x milliseconds
        images.forEach(image => {
            const randomDie = Math.floor(Math.random() * 6) + 1;
            image.src = `assets/white_dice_${randomDie}.gif`;
            // set images to a random die
            // Math.random() returns a random number 0 - 1
            console.log(randomDie);
        })
    }, 2000) // 2000 milliseconds = 2 seconds
})

function isDieUnlocked(dieImage) {
    // is the corresponding checkbox checked? Return false
    const checkboxes = document.querySelectorAll('#gamebox input');
    //return a new array of just the checked ones
    const uncheckedboxes = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return !uncheckedboxes.includes(dieImage);
}