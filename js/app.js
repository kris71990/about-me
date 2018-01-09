'use strict';

confirm('This is a short quiz about me. Good luck!');

var iceCream = prompt('Do I enjoy eating ice cream?');
console.log('You answered ' + iceCream + '.');
document.getElementById('iceCream').innerHTML = 'Your answer: ' + iceCream;

var pizza = prompt('Do I enjoy eating pizza?');
console.log('You answered' + pizza + '.');
document.getElementById('pizza').innerHTML = 'Your answer: ' + pizza;

var brusselSprouts = prompt('Do I enjoy eating brussel sprouts?');
console.log('You answered ' + brusselSprouts + '.');
document.getElementById('brusselSprouts').innerHTML = 'Your answer: ' + brusselSprouts;

var cake = prompt('Do enjoy eating cake?');
console.log('You answered ' + cake + '.');
document.getElementById('cake').innerHTML = 'Your answer: ' + cake;

var eating = prompt('Do I enjoy eating?');
console.log('You answered ' + eating + '.');
document.getElementById('eating').innerHTML = 'Your answer: ' + eating;