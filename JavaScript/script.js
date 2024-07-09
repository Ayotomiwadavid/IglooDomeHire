const menuToggler = document.querySelector(".menuToggler");
const sideBar = document.querySelector(".sideBar");

menuToggler.addEventListener("click", () => {
  sideBar.classList.toggle("active");

  // Check if the sidebar has the 'active' class
  if (sideBar.classList.contains("active")) {
    // Change the image to 'close-icon.png' when the sidebar is active
    menuToggler.src = "./images/close.png";
  } else {
    // Change the image back to 'menu-icon.png' when the sidebar is not active
    menuToggler.src = "./images/menu.png";
  }
});


document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
