const gallery = document.querySelector(".gallery");
const galleryResize = document.querySelector(".gallery__resize");
const before = document.querySelector("#before");
const after = document.querySelector("#after");

gallery.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  galleryResize.classList.remove("tr");
  galleryResize.style.width = x + "px";
});

gallery.addEventListener("mouseleave", (e) => {
  galleryResize.style.width = 50 + "%";
  galleryResize.classList.add("tr");
});

before.addEventListener("click", (e) => {
  galleryResize.classList.add("tr");
  galleryResize.style.width = 100 + "px";
});

after.addEventListener("click", (e) => {
  galleryResize.classList.add("tr");
  galleryResize.style.width = 90 + "%";
});
