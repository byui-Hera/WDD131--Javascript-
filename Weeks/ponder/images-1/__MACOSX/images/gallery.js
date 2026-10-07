// 1. Retrieve element from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');

// 2. Add an event listener to show dialog
gallery.addEventListener('click', function (event) {
    let clickedImage = event.target.closest('img');

    if (!clickedImage) return;

    // swap out src of dialog image
    dialogImage.src = clickedImage.src;

    // show dialog box
    dialog.showModal();
});

closeButton.addEventListener('click', function () {
    dialog.close();
});

