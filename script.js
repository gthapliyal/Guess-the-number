'use strict ';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no number
  if (!guess) {
    displayMsg('🚫 No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMsg('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? '📈 Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMsg('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no number
    if (!guess) {
      displayMsg('🚫 No number!');

      //When player wins
    } else if (guess === secretNumber) {
      displayMsg('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
      //When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMsg(guess > secretNumber ? '📈 Too high' : '📉Too low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMsg('💣 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
