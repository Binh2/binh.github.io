let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat1.jpg') {
      myImage.setAttribute('src', 'images/cat2.jpg');
    } else {
      myImage.setAttribute('src', 'images/cat1.jpg');
    }
}	
let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('Please enter your name.');
  while (!myName) {
    myName = prompt('Please reenter your name.');
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Cat is cool, ' + myName;
};
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cat is cool, ' + storedName;
};
myButton.onclick = function() {
  setUserName();
};

