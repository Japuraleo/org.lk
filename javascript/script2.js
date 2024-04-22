
let menu = document.querySelector("#menuIcon");
let navbar = document.querySelector(".navbar .nav-links");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
