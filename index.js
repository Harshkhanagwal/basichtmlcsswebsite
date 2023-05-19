const header = document.querySelector("header")
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100)
})
var list = document.querySelector(".navlist");
document.getElementById("menu-icon").addEventListener("click", function () {
    list.classList.toggle("open");
})