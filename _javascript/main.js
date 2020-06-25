const authorizeBtn = document.getElementById("authorize-btn");
const progressBar = document.querySelector("progress");
const mainBox = document.querySelectorAll(".tile.is-ancestor.is-12");
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

authorizeBtn.addEventListener("click", () => {
  mainBox[3].classList.add("is-hidden");
  progressBar.value = "75";
  mainBox[4].classList.remove("is-hidden");
});
