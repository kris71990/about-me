'use strict';

confirm('This is a short quiz about me. Good luck!');

// asks questions, keeps track of and displays correct answers
var numberCorrect = 0;
var iceCream = prompt('Do I enjoy eating ice cream?').toLowerCase();
var iceCreamField = document.getElementById('iceCream');

if (iceCream === 'y' || iceCream === 'yes' || iceCream === 'n' || 
    iceCream === 'no') {
        console.log('You answered ' + iceCream + '.');

        if (iceCream === 'no' || iceCream === 'n') {
            iceCreamField.className = 'correct';
            numberCorrect += 1;
        } else if (iceCream === 'yes' || iceCream === 'y') {
            iceCreamField.className = 'incorrect';
        }

        iceCreamField.innerHTML = 'Your answer: ' + iceCream + 
        '; ---> My answer: no';

} else {
    console.log('You didn\'t answer yes or no.');
    iceCreamField.className = 'incorrect';
    iceCreamField.innerHTML = 'Your answer: n/a; ---> My answer: no';
}

var pizza = prompt('Do I enjoy eating pizza?').toLowerCase();
var pizzaField = document.getElementById('pizza');

if (pizza === 'y' || pizza === 'yes' || pizza === 'n' || 
    pizza === 'no') {
        console.log('You answered ' + pizza + '.');

        if (pizza === 'no' || pizza === 'n') {
            pizzaField.className = 'incorrect';
        } else if (pizza === 'yes' || pizza === 'y') {
            pizzaField.className = 'correct';
            numberCorrect += 1;
        }

        pizzaField.innerHTML = 'Your answer: ' + pizza + 
        '; ---> My answer: yes';

} else {
    console.log('You didn\'t answer yes or no.');
    pizzaField.className = 'incorrect';
    pizzaField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
}

var brusselSprouts = prompt('Do I enjoy eating brussel sprouts?').toLowerCase();
var brusselSproutsField = document.getElementById('brusselSprouts');

if (brusselSprouts === 'y' || brusselSprouts === 'yes' || brusselSprouts === 'n' || 
    brusselSprouts === 'no') {
        console.log('You answered ' + brusselSprouts + '.');

        if (brusselSprouts === 'no' || brusselSprouts === 'n') {
            brusselSproutsField.className = 'incorrect';
        } else if (brusselSprouts === 'yes' || brusselSprouts === 'y') {
            brusselSproutsField.className = 'correct';
            numberCorrect += 1;
        }

        brusselSproutsField.innerHTML = 'Your answer: ' + brusselSprouts + 
        '; ---> My answer: yes';

} else {
    console.log('You didn\'t answer yes or no.');
    brusselSproutsField.className = 'incorrect';
    brusselSproutsField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
}

var cake = prompt('Do I enjoy eating cake?').toLowerCase();
var cakeField = document.getElementById('cake');

if (cake === 'y' || cake === 'yes' || cake === 'n' || 
    cake === 'no') {
        console.log('You answered ' + cake + '.');

        if (cake === 'no' || cake === 'n') {
            cakeField.className = 'correct';
            numberCorrect += 1;
        } else if (cake === 'yes' || cake === 'y') {
            cakeField.className = 'incorrect';
        }

        cakeField.innerHTML = 'Your answer: ' + cake + 
        '; ---> My answer: no';

} else {
    console.log('You didn\'t answer yes or no.');
    cakeField.className = 'incorrect';
    cakeField.innerHTML = 'Your answer: n/a; ---> My answer: no';
}

var eating = prompt('Do I enjoy eating?').toLowerCase();
var eatingField = document.getElementById('eating');

if (eating === 'y' || eating === 'yes' || eating === 'n' || 
    eating === 'no') {
        console.log('You answered ' + eating + '.');

        if (eating === 'no' || eating === 'n') {
            eatingField.className = 'incorrect';
        } else if (eating === 'yes' || eating === 'y') {
            eatingField.className = 'correct';
            numberCorrect += 1;
        }

        eatingField.innerHTML = 'Your answer: ' + eating + 
        '; ---> My answer: yes';

} else {
    console.log('You didn\'t answer yes or no.');
    eatingField.className = 'incorrect';
    eatingField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
}

// keeps track of score and administers a score and a pass/fail grade
var scoreField = document.getElementById('score');
var pass;

if (numberCorrect >= 3) {
    pass = 'You passed!';
    scoreField.className = 'correct';
} else if (numberCorrect < 3) {
    pass = 'FAIL';
    scoreField.className = 'incorrect';
}

scoreField.innerHTML = numberCorrect + '/5 = ' + (numberCorrect * 20) + '%' + 
'<br /> <br />' + pass;

