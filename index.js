/**
 * Project: Events - User Interactions
 * Owner: Brian Karimi
 * Purpose: Implement various functions to handle click, key, and input events
 * Course: SDPT016
 * Date: 29th October, 2026
 * Last ModificationL 17:27 hrs
 */

// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  let _body = document.querySelector("body");
  var rgb1 = Math.floor(Math.random() * 255);
  var rgb2 = Math.floor(Math.random() * 255);
  var rgb3 = Math.floor(Math.random() * 255);
  var color = `rgb(${rgb1},${rgb2}, ${rgb3})`;
  console.log(color);
  _body.style.backgroundColor = color;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  let _body = document.querySelector("body");
  _body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const pElem = document.getElementById("keyPressDisplay");
  console.log(pElem);
  console.log(event.key);
  pElem.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const textDisplay = document.querySelector("#textInputDisplay");
  let textInput = document.querySelectorAll("input");
  let inputTextContent = "";
  console.log(textInput.values());
  for( let val of textInput.values()){
    console.log(val);
    if (val.type == "text"){
      console.log(val.value);
      inputTextContent = val.value;
      break;
    }
  }
  if (inputTextContent.length == 0)
    inputTextContent = "Type something to display it here"
  textDisplay.textContent = `You typed: ${inputTextContent}`;
  console.log(inputTextContent);
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}