document.querySelector(".menu-btn").addEventListener("click", animateBars);

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let sidebar = document.querySelector(".sidebar");

function animateBars() {
  line1.classList.toggle("active-line1");
  line2.classList.toggle("active-line2");
  line3.classList.toggle("active-line3");

  sidebar.classList.toggle("active-sidebar");
}

function removeSidebar() {
  if (window.innerWidth > 767) {
    line1.classList.remove("active-line1");
    line2.classList.remove("active-line2");
    line3.classList.remove("active-line3");

    sidebar.classList.remove("active-sidebar");
  }
}

window.addEventListener("resize", removeSidebar);
