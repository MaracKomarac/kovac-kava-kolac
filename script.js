const gumb = document.querySelector(".hamburger");
const izbornik = document.querySelector("nav ul");

if (gumb && izbornik) {
  gumb.addEventListener("click", () => {
    izbornik.classList.toggle("otvoren");
  });
}