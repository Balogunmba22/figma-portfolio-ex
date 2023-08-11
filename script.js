// AOS Library
AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

const titleArray = [
  "Frontend Developer",
  "Software Engineer",
  "Technical Writer",
];

// Selecting Elements to work on
const titleEl = document.querySelector(".titles");

// Getting and setting titles randomnly into the title Element
const randomNo = () => Math.floor(Math.random() * titleArray.length);
const randomTitle = () => titleArray[randomNo()];
const setTitle = () => {
  titleEl.textContent = randomTitle();
};
setInterval(setTitle, 2000);
