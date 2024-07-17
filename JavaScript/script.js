const menuToggler = document.querySelector(".menuToggler");
const sideBar = document.querySelector(".sideBar");
const submitBtn = document.querySelector('#submitBtn');
const fullName = document.querySelector('#fullName');
const emailId = document.querySelector('#email_id');
const Usermessage = document.querySelector('#message');
const phoneNumber = document.querySelector('#phone');
const eventDate = document.querySelector('#date');
const contactForm = document.querySelector('#contactForm');

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


submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(fullName.value, Usermessage.value,phoneNumber.value, eventDate.value);
  const message = {
    from_name: fullName.value,
    to_name: "Igloo Hire Dome",
    message: `${Usermessage.value}. You can contact this customer with email:${emailId.value} and Phone number: ${phoneNumber.value}`,
    event_date: eventDate.value,
    };

    emailjs.send("service_pkuthqc","template_ygaueul", message)
    .then((res) => {
      alert("Success!", res.status);
      contactForm.reset();
    })
});