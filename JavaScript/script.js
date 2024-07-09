const menuToggler = document.querySelector(".menuToggler");
const sideBar = document.querySelector(".sideBar");

menuToggler.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
