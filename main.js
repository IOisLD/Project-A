// Select elements
const button = document.getElementById('changeColor');
const colorCode = document.getElementById('colorCode');
const annivText = document.getElementById('annivText');

// Make color code text blue
colorCode.style.color = 'blue';

button.addEventListener('click',function(){
  // Toggle button state
  if (button.textContent === 'Iloveyou'){
    button.textContent = 'Iloveyoutoo ❤️';
    button.style.backgroundColor = 'darkblue';
    annivText.classList.add('show');
  } else {
    button.textContent = 'Iloveyou';
    button.style.backgroundColor = '#888';
    annivText.classList.remove('show');
  }
  // Generate a random color
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = '#' + randomColor.padStart(6,'0');

  // Change the background 
  document.body.style.backgroundColor = randomColor;

  // Update the color code text
  colorCode.textContent = 'Current Color: ' + randomColor;
});

