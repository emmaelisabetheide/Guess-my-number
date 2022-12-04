'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.number').textContent = score;
};
const scoreStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const bodyColor = function (bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor;
};
const myScore = function (newscore) {
  document.querySelector('.score').textContent = newscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('💩 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayScore(secretNumber);
    bodyColor('#60b347');
    scoreStyleWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '↓ Too high!' : 'Too low!');
      score--;
      myScore(score);
    } else {
      displayMessage('Game over!');
      score--;
      myScore(0);
    }
  }
});

// To restore when clicking 'again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  myScore(score);
  displayScore('?');
  document.querySelector('.guess').value = '';
  scoreStyleWidth('15rem');
  bodyColor('#222');
});
