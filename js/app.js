'use strict';

confirm('This is a short quiz about me. Good luck!');

var iceCream = prompt('Do I enjoy eating ice cream?').toLowerCase();
if (iceCream === 'y' || iceCream === 'yes' || iceCream === 'n' || 
    iceCream === 'no') {
        console.log('You answered ' + iceCream + '.');
        document.getElementById('iceCream').innerHTML = 'Your answer: ' + iceCream + 
        '; ---> My answer: no';
    } else {
        console.log('You didn\'t answer yes or no.');
        document.getElementById('iceCream').innerHTML = 'Your answer: n/a; ---> My answer: no';
    }


var pizza = prompt('Do I enjoy eating pizza?').toLowerCase();
if (pizza === 'y' || pizza === 'yes' || pizza === 'n' || 
    pizza === 'no') {
        console.log('You answered ' + pizza + '.');
        document.getElementById('pizza').innerHTML = 'Your answer: ' + pizza + 
        '; ---> My answer: yes';
    } else {
        console.log('You didn\'t answer yes or no.');
        document.getElementById('pizza').innerHTML = 'Your answer: n/a; ---> My answer: yes';
    }

var brusselSprouts = prompt('Do I enjoy eating brussel sprouts?').toLowerCase();
if (brusselSprouts === 'y' || brusselSprouts === 'yes' || brusselSprouts === 'n' || 
    brusselSprouts === 'no') {
        console.log('You answered ' + brusselSprouts + '.');
        document.getElementById('brusselSprouts').innerHTML = 'Your answer: ' + 
        brusselSprouts + '; ---> My answer: yes';
    } else {
        console.log('You didn\'t answer yes or no.');
        document.getElementById('brusselSprouts').innerHTML = 'Your answer: n/a; ---> My answer: yes';
    }

var cake = prompt('Do enjoy eating cake?').toLowerCase();
if (cake === 'y' || cake === 'yes' || cake === 'n' || 
    cake === 'no') {
        console.log('You answered ' + cake + '.');
        document.getElementById('cake').innerHTML = 'Your answer: ' + cake + 
        '; ---> My answer: no';
    } else {
        console.log('You didn\'t answer yes or no.');
        document.getElementById('cake').innerHTML = 'Your answer: n/a; ---> My answer: no';
    }

var eating = prompt('Do I enjoy eating?').toLowerCase();
if (eating === 'y' || eating === 'yes' || eating === 'n' || 
    eating === 'no') {
        console.log('You answered ' + eating + '.');
        document.getElementById('eating').innerHTML = 'Your answer: ' + eating + 
        '; ---> My answer: yes';
    } else {
        console.log('You didn\'t answer yes or no.');
        document.getElementById('eating').innerHTML = 'Your answer: n/a; ---> My answer: yes';
    }