// Import all wide images from /backgrounds/ 
import background1 from '/backgrounds/wide1.png';
import background2 from '/backgrounds/wide2.png';
import background3 from '/backgrounds/wide3.png';
import background4 from '/backgrounds/wide4.png';

let previousNumber = -1;
let imageUrls = [ background1, background2, background3, background4];

function setRandomBackgroundImage() {
  let randomImageUrl;
  const backgroundImageContainer = document.getElementById('background-image-container');

  // The same number will not be used twice in a row
  do {
    randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  } while (randomImageUrl === previousNumber);

  previousNumber = randomImageUrl;
  backgroundImageContainer.style.backgroundImage = `url(${randomImageUrl})`;
}
  
window.addEventListener('load', setRandomBackgroundImage);