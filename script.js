'use strict';

//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0 = document.querySelector('.score--0');
const score1 = document.querySelector('score--1');

dice.classList.add('hidden');
let finalScore, currentScore, activePlayer, playing;

const initial = () => {
  finalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  playing = true;
};

initial();

const switchPlayer = () => {
  // document.querySelector(`#score--${activePlayer}`).textContent = currentScore;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
//   console.log(activePlayer);
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const random = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${random}.png`;

    if (random !== 1) {
      currentScore += random;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to total score
    finalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      finalScore[activePlayer];

    //score>=100??
    if (finalScore[activePlayer] >= 100) {
      // yes : current player wins
      playing = false;
      dice.classList.add('hidden'); //adding hidden class for removing dice
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // no : switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initial 
//   finalScore = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   document.querySelector(`#current--0`).textContent = 0;
//   document.querySelector(`#current--1`).textContent = 0;
//   document.querySelector('#score--0').textContent = 0;
//   document.querySelector('#score--1').textContent = 0;
//   // document.querySelectorAll('#score--0','#score--1').value=0;
//   // document.querySelector(`.player--0`).classList.remove('player--active');
//   document.querySelector(`.player--0`).classList.add('player--active');
//   document.querySelector(`.player--0`).classList.remove('player--winner');
//   document.querySelector(`.player--1`).classList.remove('player--active');
//   document.querySelector(`.player--1`).classList.remove('player--winner');
//   playing = true;
);
