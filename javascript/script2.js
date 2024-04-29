
let menu = document.querySelector("#menuIcon");
let navbar = document.querySelector(".navbar .nav-links");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


function downloadFile() {
  window.location.href = "https://drive.google.com/file/d/1nM_i0_wkYE4vjmC_YkZI1WKt4blZZuEU/view?usp=sharing";
}