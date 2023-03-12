const sliders = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

function setActive(i) {
  for (let x of sliders) {
    console.log(x);
    x.classList.remove("active");
    sliders[i].classList.add("active");
  }
  for (let dot of dots) {
    dot.classList.remove("active");
    dots[i].classList.add("active");
  }
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    setActive(j);
  });
}
/* ------------- Navigation Responsive ------------------- */

const toggleNav = document.querySelector(".toggleNav");
const navRe = document.querySelector(".nav-responsive");
const barsAndClose = document.querySelector(".toggleNav i");

toggleNav.addEventListener("click", function () {
  navRe.classList.toggle("open");
  const isOpen = navRe.classList.contains("open");
  barsAndClose.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
