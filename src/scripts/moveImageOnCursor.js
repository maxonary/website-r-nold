// Picture moves with mouse cursor

const backgroundImageContainer = document.getElementById('background-image-container');
const backgroundImage = backgroundImageContainer.querySelector('img');

backgroundImageContainer.addEventListener('mousemove', e => {
const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;
backgroundImage.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
});