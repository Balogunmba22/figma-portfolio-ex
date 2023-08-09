const titleArray = [
  "Frontend Developer",
  "Software Engineer",
  "Technical Communicator",
];
const numberArray = ["0", "9", "0", "2", "5", "5", "8", "5", "4", "9", "2"];

// Selecting Elements to work on
const titleEl = document.querySelector(".titles");
const numberEl = document.querySelector(".number");

// Getting and setting titles randomnly into the title Element
const randomNo = () => Math.floor(Math.random() * titleArray.length);
const randomTitle = () => titleArray[randomNo()];
const setTitle = () => {
  titleEl.textContent = randomTitle();
};
setInterval(setTitle, 2000);

// Displaying numbers into the number Element
for (const num of numberArray) {
  numberEl.innerHTML += `<small>${num}</small>`;
}

//  <div class="photo-container">
//           <img src="/media/my_pic.png" alt="My Photo" />
//           <figcaption class="titles">
//             <!-- titles goes here -->
//           </figcaption>
//         </div>
