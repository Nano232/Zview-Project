let icon = document.querySelector(".menu");
let links = document.querySelector(".links");
icon.onclick = function () {
  if (links.style.left === "-100%") {
    links.style.left = "0";
  } else {
    links.style.left = "-100%";
  }
};
