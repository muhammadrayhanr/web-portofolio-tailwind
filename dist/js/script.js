// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const body = document.querySelector("#body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Click outside hamburger
body.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
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

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  logoLight.classList.add("hidden");
  logoDark.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  logoLight.classList.remove("hidden");
  logoDark.classList.add("hidden");
}

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    logoLight.classList.add("hidden");
    logoDark.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    logoLight.classList.remove("hidden");
    logoDark.classList.add("hidden");
  }
});

//Lock Toggle based on mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
