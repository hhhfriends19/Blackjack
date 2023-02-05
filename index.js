// 1. Create the player object. Give it two keys, name and chips,
// let player = {
//   name: "Mavis",
//   chips: 145,
// };
const inputNameEl = document.getElementById("inputName-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
    playerEl.textContent = "Welcome, "+inputNameEl.value;
});

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


function getRandomCard() {
  let dice = Math.floor(Math.random() * 12) + 1;
  if (dice === 1) {
    return 11;
  } else if (dice > 10) {
    return 10;
  } else {
    return dice;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // message = "Do you want to drawing a new card?";
  // messageEl.textContent = message;

  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
