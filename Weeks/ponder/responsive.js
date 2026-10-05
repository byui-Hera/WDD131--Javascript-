const menuButton = document.querySelector(".menu-btn");

document.body.classList.add("menu-enhanced");

menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("is-open");

    const menuIsOpen = menuButton.classList.contains("is-open");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});
