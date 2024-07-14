let header = document.querySelector("header");
let btnUp = document.querySelector("button.right");
let btnDown = document.querySelector("button.left");
let distances = btnUp.getBoundingClientRect();
let dishes = document.querySelector(".dishes");
let dish = document.querySelectorAll(".dish");

let bar = document.querySelector(`.bar i`);
let navBar = document.querySelector(`.bar .navbar`);
bar.onmouseenter = function (e) {
  bar.classList.remove("fa-bars");
  bar.classList.add("fa-plus");
};
bar.onmouseleave = function (e) {
  bar.classList.remove("fa-plus");
  bar.classList.add("fa-bars");
  navBar.style.cssText = `display:none;opacity:0`;
};
bar.onclick = function () {
  navBar.style.cssText = `display:block;opacity: 1;`;
};
console.log(distances);
window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY >= 89) {
    // header.style.opacity = 1;
    header.classList.add("show");
  } else {
    // header.style.opacity = 0;
    header.classList.remove("show");
  }
};
let prices = ["30$", "40$", "50$", "10$"];
for (let i = 0; i < dish.length; i++) {
  // getComputedStyle(dish[i], "::before").setPropertyValue("content", prices[i]);

  dish[i].setAttribute("data-before", prices[i]);
}
console.log(dishes);
let width = dish[0].getBoundingClientRect().width + 20;
let translation = 0;
let clicks = 0;
let maxClicks = dish.length - 1;
btnUp.onclick = function (event) {
  if (clicks >= maxClicks) {
    event.preventDefault();
    return;
  }
  clicks++;
  console.log(clicks);
  translation += width;
  dishes.style.cssText = `transform:translateX(-${translation}px)`;
  console.log(translation);
};

btnDown.onclick = function (event) {
  if (clicks <= 0) {
    event.preventDefault();
    return;
  }
  clicks--;
  translation -= width;
  dishes.style.cssText = `transform:translateX(-${translation}px)`;
  console.log(translation);
};

let arrowRight = document.querySelector(`.about .buttons .right`);
let arrowLeft = document.querySelector(`.about .buttons .left`);
let opinion = document.querySelectorAll(".opinion");
console.log(opinion[0]);
let widthElement = opinion[0].getBoundingClientRect().width + 20;
let moving = document.querySelector(".opinions");
let numClicks = 0;
let translate = 0;
arrowLeft.onclick = function (e) {
  if (numClicks <= 0) {
    e.preventDefault();
    return;
  }
  numClicks--;
  translate += widthElement;
  console.log(translate);
  moving.style.cssText = `transform:translateX(${translate}px)`;
};
arrowRight.onclick = function (e) {
  if (numClicks >= opinion.length - 1) {
    e.preventDefault();
    return;
  }
  numClicks++;
  translate -= widthElement;
  console.log(translate);
  moving.style.cssText = `transform:translateX(${translate}px)`;
};

// content

let form = document.forms[0];
console.log(form);

let inputNumber = document.querySelector(`input[type="tel"]`);
let inputEmail = document.querySelector(`input[type="email"]`);
let object = {};
window.onload = function () {
  if (window.localStorage.getItem("inputs")) {
    inputNumber.value = JSON.parse(
      window.localStorage.getItem("inputs")
    ).number;
    inputEmail.value = JSON.parse(window.localStorage.getItem("inputs")).email;
  }
};
// window.localStorage.clear();
form.onsubmit = function (e) {
  object = { number: inputNumber.value, email: inputEmail.value };
  console.log(object);
  window.localStorage.setItem("inputs", JSON.stringify(object));
  // console.log(window.localStorage.getItem("inputs"));
  e.preventDefault();
};

// form.onsubmit = function () {};

// footer

let par = document.querySelector("footer p");
let date = new Date();
let year = date.getFullYear();
par.innerHTML = `restaurant copyright ${year}©`;
