const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");
const modalCloseButton = document.querySelector(".modal-close");
const fullImageUrl = "https://wddbyui.github.io/wdd131/images/norris-full.jpg";

menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 599px)").matches) {
        siteNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    }
});

document.querySelectorAll(".image-button").forEach((button) => {
    button.addEventListener("click", () => {
        const thumbnail = button.querySelector("img");
        modalImage.src = fullImageUrl;
        modalImage.alt = thumbnail.alt;
        imageModal.showModal();
    });
});

modalCloseButton.addEventListener("click", () => imageModal.close());

imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        imageModal.close();
    }
});
