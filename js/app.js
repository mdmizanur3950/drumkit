// UI Variables
// const key = document.querySelector('h1');
const allKeys = document.querySelectorAll('.key');

// Event Listners
window.addEventListener('keydown', playSound);

// Playsound Function
function playSound(e) {
   
  // get the correspondance html element
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  // get the correspondance audio file
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!sound) return;

  key.classList.add('playing');
  sound.currentTime = 0;
  sound.play();

}

// Remove Transition
allKeys.forEach(function (singleKey) {
  // console.log(singleKey);
  singleKey.addEventListener('transitionend', removeTransition);
});
 
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.target);
  e.target.classList.remove('playing');
 }