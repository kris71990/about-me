'use strict';

confirm('This is a short quiz about me. Good luck!');
var username = prompt('What is your name?');
var numberCorrect = 0;

// Question 1
// asks questions, keeps track of and displays correct answers
function question1(){
  var iceCream = prompt('Do I enjoy eating ice cream?').toLowerCase();
  var iceCreamField = document.getElementById('iceCream');

  if (iceCream === 'y' || iceCream === 'yes' || iceCream === 'n' ||
      iceCream === 'no') {
    console.log('Question 1: You answered ' + iceCream + '.');

    if (iceCream === 'no' || iceCream === 'n') {
      iceCreamField.className = 'correct';
      numberCorrect += 1;
      alert('You are correct ' + username);
    } else if (iceCream === 'yes' || iceCream === 'y') {
      iceCreamField.className = 'incorrect';
      alert('You are incorrect ' + username);
    }

    iceCreamField.innerHTML = 'Your answer: ' + iceCream +
          '; ---> My answer: no';

  } else {
    console.log('Question 1: You didn\'t answer yes or no.');
    alert('You didn\'t answer yes or no.');
    iceCreamField.className = 'incorrect';
    iceCreamField.innerHTML = 'Your answer: n/a; ---> My answer: no';
  }
}

// Question 2
function question2(){
  var pizza = prompt('Do I enjoy eating pizza?').toLowerCase();
  var pizzaField = document.getElementById('pizza');

  if (pizza === 'y' || pizza === 'yes' || pizza === 'n' ||
      pizza === 'no') {
    console.log('Question 2: You answered ' + pizza + '.');

    if (pizza === 'no' || pizza === 'n') {
      pizzaField.className = 'incorrect';
      alert('You are incorrect ' + username);
    } else if (pizza === 'yes' || pizza === 'y') {
      pizzaField.className = 'correct';
      numberCorrect += 1;
      alert('You are correct ' + username);
    }

    pizzaField.innerHTML = 'Your answer: ' + pizza +
          '; ---> My answer: yes';

  } else {
    console.log('Question 2: You didn\'t answer yes or no.');
    alert('You didn\'t answer yes or no.');
    pizzaField.className = 'incorrect';
    pizzaField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
  }
}

// Question 3
function question3(){
  var brusselSprouts = prompt('Do I enjoy eating brussel sprouts?').toLowerCase();
  var brusselSproutsField = document.getElementById('brusselSprouts');

  if (brusselSprouts === 'y' || brusselSprouts === 'yes' || brusselSprouts === 'n' ||
      brusselSprouts === 'no') {
    console.log('Question 3: You answered ' + brusselSprouts + '.');

    if (brusselSprouts === 'no' || brusselSprouts === 'n') {
      brusselSproutsField.className = 'incorrect';
      alert('You are incorrect ' + username);
    } else if (brusselSprouts === 'yes' || brusselSprouts === 'y') {
      brusselSproutsField.className = 'correct';
      numberCorrect += 1;
      alert('You are correct ' + username);
    }

    brusselSproutsField.innerHTML = 'Your answer: ' + brusselSprouts +
          '; ---> My answer: yes';

  } else {
    console.log('Question 3: You didn\'t answer yes or no.');
    brusselSproutsField.className = 'incorrect';
    alert('You didn\'t answer yes or no.');
    brusselSproutsField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
  }
}

// Question 4
function question4(){
  var cake = prompt('Do I enjoy eating cake?').toLowerCase();
  var cakeField = document.getElementById('cake');

  if (cake === 'y' || cake === 'yes' || cake === 'n' ||
      cake === 'no') {
    console.log('Question 4: You answered ' + cake + '.');

    if (cake === 'no' || cake === 'n') {
      cakeField.className = 'correct';
      alert('You are correct ' + username);
      numberCorrect += 1;
    } else if (cake === 'yes' || cake === 'y') {
      cakeField.className = 'incorrect';
      alert('You are incorrect ' + username);
    }

    cakeField.innerHTML = 'Your answer: ' + cake +
          '; ---> My answer: no';

  } else {
    console.log('Question 4: You didn\'t answer yes or no.');
    cakeField.className = 'incorrect';
    alert('You didn\'t answer yes or no.');
    cakeField.innerHTML = 'Your answer: n/a; ---> My answer: no';
  }
}

// Question 5
function question5(){
  var eating = prompt('Do I enjoy eating?').toLowerCase();
  var eatingField = document.getElementById('eating');

  if (eating === 'y' || eating === 'yes' || eating === 'n' ||
      eating === 'no') {
    console.log('Question 5: You answered ' + eating + '.');

    if (eating === 'no' || eating === 'n') {
      eatingField.className = 'incorrect';
      alert('You are incorrect ' + username);
    } else if (eating === 'yes' || eating === 'y') {
      eatingField.className = 'correct';
      alert('You are correct ' + username);
      numberCorrect += 1;
    }

    eatingField.innerHTML = 'Your answer: ' + eating +
          '; ---> My answer: yes';

  } else {
    console.log('Question 5: You didn\'t answer yes or no.');
    eatingField.className = 'incorrect';
    alert('You didn\'t answer yes or no.');
    eatingField.innerHTML = 'Your answer: n/a; ---> My answer: yes';
  }
}

// Question 6
// asks question four times, responding to user input
function question6(){
  var podcastsField = document.getElementById('podcasts');
  for (var i = 0; i < 4; i++) {
    var podcasts = prompt('How many unlistened podcasts do I have on my phone? (Enter numeric value)');
    if (isNaN(podcasts)) {
      console.log('You didn\'t enter a numeric value, and you wasted a guess -.-');
      alert('Enter a numeric value this time.');
      if (i === 3) {
        confirm('You ran out of guesses, sorry.');
        podcastsField.className = 'incorrect';
        podcastsField.innerHTML = 'Your answer: ' + podcasts +
          '; ---> My answer: 306';
      }
    } else if (podcasts > 306) {
      console.log('Question 6: You answered ' + podcasts + ', which is too many.');
      alert('That is more than I have.');
      if (i === 3) {
        confirm('You ran out of guesses, sorry.');
        podcastsField.className = 'incorrect';
        podcastsField.innerHTML = 'Your answer: ' + podcasts +
          '; ---> My answer: 306';
      }
    } else if (podcasts < 306) {
      console.log('Question 6: You answered ' + podcasts + ', which is too few.');
      alert('I have more than that.');
      if (i === 3) {
        confirm('You ran out of guesses, sorry.');
        podcastsField.className = 'incorrect';
        podcastsField.innerHTML = 'Your answer: ' + podcasts +
          '; ---> My answer: 306';
      }
    } else {
      console.log('Question 6: You answered ' + podcasts + ', which is correct!');
      alert('Wow, that was a lucky guess.');
      podcastsField.className = 'correct';
      podcastsField.innerHTML = 'Your answer: ' + podcasts +
          '; ---> My answer: 306';
      numberCorrect += 1;
      break;
    }
  }
}

// Question 7
// asks question and checks array of correct answers; if incorrect, question repeats.
// if correct, a congratulations message appears along with the other correct answers.
function question7(){
  var countryField = document.getElementById('country');
  var countries = ['usa', 'russia', 'china', 'latvia', 'uk'];
  var guesses = 0;
  var livedString = 'I have lived in: ';

  for (var x = 0; x < countries.length; x++) {
    if (countries[x] === 'usa' || countries[x] === 'uk') {
      countries[x] = countries[x].toUpperCase();
    } else {
      countries[x] = countries[x].charAt(0).toUpperCase() + countries[x].slice(1);
    }

    if (x === countries.length - 1) {
      livedString += 'and ' + countries[x] + '.';
    } else {
      livedString += countries[x] + ', ';
    }
  }

  // do/while loop asks question over and over, if necessary
  do {
    var country = prompt('Name a country I have lived in for longer than a month.').toLowerCase();
    var inArray = false;

    // loop over countries array and checks if user information matches any contents
    for (var j = 0; j < countries.length; j++) {

      if (country === countries[j].toLowerCase()) {
        console.log('Question 7: You are correct! ' + livedString);
        alert('You are correct! ' + livedString);
        inArray = true;
        countryField.className = 'correct';
        countryField.innerHTML = 'Your answer: ' + country +
              '; ---> My answers: ' + livedString;
        numberCorrect += 1;
        guesses = 7;
        break;
      } else {
        continue;
      }
    }

    guesses += 1;
    if (inArray === false) {
      console.log('Question 7: You are wrong.');
      alert('You are wrong, guess again.');
      if (guesses === 6) {
        countryField.innerHTML = 'Your answer: ' + country +
              '; ---> My answers: ' + livedString;
        countryField.className = 'incorrect';
      }
    }

  } while (guesses < 7);
}

// keeps track of score and administers a score and a pass/fail grade
function calculateScore(){
  var scoreField = document.getElementById('score');
  var pass;

  if (numberCorrect >= 4) {
    pass = 'You passed!';
    scoreField.className = 'correct';
  } else if (numberCorrect < 4) {
    pass = 'FAIL';
    scoreField.className = 'incorrect';
  }

  scoreField.innerHTML = numberCorrect + '/7 = ' + Math.round((numberCorrect * (100 / 7))) +
  '%' + '<br />' + pass;
}

// calls question functions and calculateScore function
question1();
question2();
question3();
question4();
question5();
question6();
question7();
calculateScore();