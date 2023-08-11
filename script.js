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
