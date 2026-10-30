const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle Dropdown saat Hamburger diklik
hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
});

// Tutup dropdown jika pengguna klik di luar area menu
window.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("active")) {
        dropdownMenu.classList.remove("active");
    }
});
const headerList = document.getElementById("headerList");

hamburgerBtn.addEventListener("click", () => {
    headerList.classList.toggle("active");
});