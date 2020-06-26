"use strict";

var authorizeBtn = document.getElementById("authorize-btn");
var progressBar = document.querySelector("progress");
var mainBox = document.querySelectorAll(".tile.is-ancestor.is-12");
document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

authorizeBtn.addEventListener("click", function () {
  mainBox[3].classList.add("is-hidden");
  progressBar.value = "75";
  mainBox[4].classList.remove("is-hidden");
});

//DARK SWITCH TOOGLER

var toggleSwitch = document.querySelector('.field input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');

console.log(toggleSwitch);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);