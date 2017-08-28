var button = document.querySelector('button');

//button.innerText = 'hi Mom!';

button.addEventListener('click', function () { // this is a callback/anonymous function
  //console.log('hello!');
  //button.innerText = 'hello'; //the button updates from 0 to hello after the click
  var n = parseInt(button.innerText);
  n = n + 1; // increments the 0 everytime the button is clicked!
  button.innerText = n;
});
