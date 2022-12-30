const titleArray = [
  "Frontend Developer",
  "Software Engineer",
  "Technical Communicator",
];

const titleEl = document.querySelector(".titles");

const randomNo = () => Math.floor(Math.random() * titleArray.length);
const randomTitle = () => titleArray[randomNo()];
const setTitle = () => {
  titleEl.textContent = randomTitle();
};
console.log(setInterval(setTitle, 2000));

// Manipulating the menu bar
const menuBarEl = document.querySelector(".menu_icon");
const navEl = document.querySelector("nav");

menuBarEl.addEventListener("click", () => {
  navEl.style.display = "block";
});

navEl.addEventListener("click", () => (navEl.style.display = "none"));
