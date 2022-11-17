// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Contact Form

const scriptURL = "https://script.google.com/macros/s/AKfycbxP0Bx0FVlXts2gGzc65qJ4xPHlM-8tirFLozU4ztVBnR447psM3T_i1x4iMCfvDj-J/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const alertMessage = document.querySelector(".alert-message");
const closeButton = document.querySelector(".close-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // when send button clicked
  // show loading button, hide send button
  btnLoading.classList.toggle("hidden");
  btnSend.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // show send button, hide loading button
      btnLoading.classList.toggle("hidden");
      btnSend.classList.toggle("hidden");
      // show alert message
      alertMessage.classList.toggle("hidden");
      closeButton.classList.toggle("hidden");
      // reset form
      form.reset();
      console.log("Success! Your message has been received.", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

closeButton.addEventListener("click", () => {
  alertMessage.classList.toggle("hidden");
});
