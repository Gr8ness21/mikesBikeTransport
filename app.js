const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

document.querySelectorAll(".nav-list li").forEach(item => {

    item.addEventListener("click", () => {
        navList.classList.remove("active");
        hamburger.classList.remove("active");
    });

});

const navItems = [
    document.getElementById("about"),
    document.getElementById("contact"),
    document.getElementById("pickup")
];

navItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
});