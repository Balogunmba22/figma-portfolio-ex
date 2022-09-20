const logoEl = document.querySelectorAll('.logo');

const rgbRandNumber = num => Math.floor(Math.random() * num + 1);

function randomColor() {
   let color = `rgb(${rgbRandNumber(255)}, ${rgbRandNumber(255)}, ${rgbRandNumber(255)})`
   return color
} 

for (const letter of logoEl) {

   function logoColor() {
      return letter.style.color = randomColor()

   }

   setInterval(logoColor, 1000)

}