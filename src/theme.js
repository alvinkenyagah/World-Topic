function dark() {
  let darkMode = document.querySelector(".dark");
  if (
    darkMode.style.backgroundColor === "black" &&
    darkMode.style.color === "white"
  ) {
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
  } else {
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
  }
}



let backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

