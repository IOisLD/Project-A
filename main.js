// Select the button and color display element
const button = document.getElementById('changeColor');
const colorCode = document.getElementById('colorCode');

// Add an event listener that runs when the button is clicked
button.addEventListener('click', function() {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Change the background color of the page
  document.body.style.backgroundColor = randomColor;

  // Update the color code text
  colorCode.textContent = 'Current Color: ' + randomColor;
});

