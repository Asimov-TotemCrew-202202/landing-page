document.querySelector(".menu-btn").addEventListener("click", animateBars);

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let sidebar = document.querySelector(".sidebar");
const listItems = document.querySelectorAll(".sidebar__list li");

function animateBars() {
  line1.classList.toggle("active-line1");
  line2.classList.toggle("active-line2");
  line3.classList.toggle("active-line3");

  sidebar.classList.toggle("active-sidebar");
}

function removeSidebar() {
  line1.classList.remove("active-line1");
  line2.classList.remove("active-line2");
  line3.classList.remove("active-line3");

  sidebar.classList.remove("active-sidebar");
}

function removeSidebarWhenResize() {
  if (window.innerWidth > 767) {
    removeSidebar();
  }
}

window.addEventListener("resize", removeSidebarWhenResize);

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    removeSidebar();
  });
});
