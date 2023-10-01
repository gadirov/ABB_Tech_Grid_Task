
const toggleButton = document.getElementById("toogleButton");

toggleButton.addEventListener("click", ToggleNavMenu);

function ToggleNavMenu() {
  let navUl = document.getElementById("nav");
  if (navUl.className === "nav") {
    navUl.className += " toogleNav";
  } else {
    navUl.className = "nav";
  }
}