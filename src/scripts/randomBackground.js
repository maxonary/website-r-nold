// Import all wide images from /backgrounds/ 
import background1 from '/backgrounds/wide1.png';
import background2 from '/backgrounds/wide2.png';
import background3 from '/backgrounds/wide3.png';
import background4 from '/backgrounds/wide4.png';

function setRandomBackgroundImage() {
    const imageUrls = [ background1, background2, background3, background4
    ];
  
    const backgroundImageContainer = document.getElementById('background-image-container');
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    backgroundImageContainer.style.backgroundImage = `url(${randomImageUrl})`;
  }
  
  window.addEventListener('load', setRandomBackgroundImage);