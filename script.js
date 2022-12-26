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
