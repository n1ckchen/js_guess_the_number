'use strict';
// set secret number
let secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 10;
let highScore = 0;

// refactor function
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

// click events

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //  no guess
  if (!guess) {
    displayMessage('🔴 No Guess!');

    //   win game and update highest scoress
  } else if (guess === secretNumber) {
    displayMessage('✨ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⤴ Too High!' : '⤵ Too Low!');
      score--;
      //   document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage('😅 You Lose!');
      //   document.querySelector('.score').textContent = '0';
      displayScore(0);
    }
  }

  //   guess too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMessage = '⤴ Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage = '😅 You Lose!';
  //       document.querySelector('.score').textContent = '0';
  //     }

  //     //   guess too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMessage = '⤵ Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage = '😅 You Lose!';
  //       document.querySelector('.score').textContent = '0';
  //     }
  //   }

  document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    // scretNumber = Math.trunc(Math.random() * 20 + 1);

    // document.querySelector('.score').textContent = score;
    displayScore(score);
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
