'use strict';

let scores = [0, 0];
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let activePlayer = 0;
const playing = true;

diceEl.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
current0 = 0;
current1 = 0;
//dice.style.display = 'none';

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scores[activePlayer] = 0; //?
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active'); //?? idk
  player1.classList.toggle('player--active');
};

const btnRoll = document
  .querySelector('.btn--roll')
  .addEventListener('click', function () {
    if (scores[activePlayer] < 100) {
      let dice = Math.trunc(Math.random() * 6) + 1;
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      if (dice !== 1) {
        scores[activePlayer] += dice;
        document.getElementById(
          `current--${activePlayer}` // building id name dynamically
        ).textContent = scores[activePlayer];
      } else {
        console.log(dice);
        switchPlayer();
      }
    }
    //else win!
  });
const btnHold = document
  .querySelector('.btn--hold')
  .addEventListener('click', function () {
    if (score[activePlayer] < 100) {
      current[activePlayer] += scores[activePlayer];
      scores[activePlayer] = 0;
      switchPlayer();
    }
    // else win
  });
