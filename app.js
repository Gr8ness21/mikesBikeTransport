const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

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