// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

let currentDeck;

const rls = require('readline-sync');

const playAgain = [
  ["yes", "y", "1"],
  ["no", "n", "2"]
];

const validOptions = [
  ["1", "hit", "HIT", "h"],
  ["2", "stay", "stand", "STAY", "STAND", "s"]
];

const deck = [
  ["2", "H"],
  ["2", "C"],
  ["2", "D"],
  ["2", "S"],
  ["3", "H"],
  ["3", "C"],
  ["3", "D"],
  ["3", "S"],
  ["4", "H"],
  ["4", "C"],
  ["4", "D"],
  ["4", "S"],
  ["5", "H"],
  ["5", "C"],
  ["5", "D"],
  ["5", "S"],
  ["6", "H"],
  ["6", "C"],
  ["6", "D"],
  ["6", "S"],
  ["7", "H"],
  ["7", "C"],
  ["7", "D"],
  ["7", "S"],
  ["8", "H"],
  ["8", "C"],
  ["8", "D"],
  ["8", "S"],
  ["9", "H"],
  ["9", "C"],
  ["9", "D"],
  ["9", "S"],
  ["10", "H"],
  ["10", "C"],
  ["10", "D"],
  ["10", "S"],
  ["J", "H"],
  ["J", "C"],
  ["J", "D"],
  ["J", "S"],
  ["Q", "H"],
  ["Q", "C"],
  ["Q", "D"],
  ["Q", "S"],
  ["K", "H"],
  ["K", "C"],
  ["K", "D"],
  ["K", "S"],
  ["A", "H"],
  ["A", "C"],
  ["A", "D"],
  ["A", "S"]
];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function cardSelected(deck) {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1);
  return card[0][0];
}

function dealInitialCards(deck, arr1, arr2) {
  arr1.push(cardSelected(deck));
  arr2.push(cardSelected(deck));
  arr1.push(cardSelected(deck));
  arr2.push(cardSelected(deck));
  prompt(`You have ${arr1[0]} and ${arr1[1]}`);
  prompt(`Dealer has ${arr2[0]} and an unknown card`);
}

function calculateValue(arr) {
  let total = 0;
  if (!arr.includes("A")) {
    total = arr.reduce((accumulator, current) => {
      if (current === "J" || current === "Q" || current === "K") {
        return accumulator += 10;
      } else {
        return accumulator += Number(current);
      }
    }, 0);
  } else {
    let total1 = arr.reduce((accumulator, current) => {
      if (current === "J" || current === "Q" || current === "K") {
        return accumulator += 10;
      } else if (current === "A") {
        return accumulator += 11;
      } else {
        return accumulator += Number(current);
      }
    }, 0);
    let total2 = arr.reduce((accumulator, current) => {
      if (current === "J" || current === "Q" || current === "K") {
        return accumulator += 10;
      } else if (current === "A") {
        return accumulator += 1;
      } else {
        return accumulator += Number(current);
      }
    }, 0);
    if (total1 <= 21) {
      total = total1;
    } else {
      total = total2;
    }
  }
  return total;
}

function busted(arr) {
  if (calculateValue(arr) > 21) {
    return true;
  } else {
    return false;
  }
}

function dealerHits(arr, deck) {
  prompt(`Dealer's unknown card is ${arr[1]}`);
  while (calculateValue(arr) <= 16) {
    arr.push(cardSelected(deck));
    prompt(`Dealer hit's a ${arr[arr.length - 1]}`);
    prompt(`Dealer has ${arr.join(", ")}`);
    console.log("");
  };
  if (calculateValue(arr) > 21) {
    prompt(`Dealer has ${calculateValue(arr)}`);
    prompt("Dealer busts!");
  } else {
    prompt("Dealer stands.");
  }
  console.log("");
}

function displayWinner(arr1, arr2) {
  let playerValue = calculateValue(arr1);
  let dealerValue = calculateValue(arr2);
  prompt(`You have ${playerValue}`);
  prompt(`Dealer has ${dealerValue}`);
  console.log("");
  if (playerValue > dealerValue) {
    prompt("Player has the higher score! Player wins.");
  } else if (playerValue === dealerValue) {
    prompt("Player and dealer have same score! It's a tie.");
  } else {
    prompt("Dealer has the higher score! Dealer wins.");
  }
}


while (true) {
  console.log("");
  prompt("Welcome to BlackJack!");
  console.log("");
  let currentDeck = deck.slice();
  let playerCards = [];
  let dealerCards = [];
  dealInitialCards(currentDeck, playerCards, dealerCards);
  if (calculateValue(playerCards) === 21 && calculateValue(dealerCards) === 21) {
    prompt(`Dealer shows ${dealerCards[1]}`);
    prompt("Both player and dealer have blackjack! It's a tie.");
  } else if (calculateValue(playerCards) === 21) {
    prompt("Player has blackjack! Player wins.");
  } else if (calculateValue(dealerCards) === 21) {
    prompt(`Dealer shows ${dealerCards[1]}`);
    prompt("Dealer has blackjack! Dealer wins.");
  } else {
    console.log("");
    prompt("What would you like to do\n==> 1) hit \n==> 2) stand");
    let option = rls.prompt();
    console.clear();
    while (!validOptions[0].includes(option) && !validOptions[1].includes(option)) {
      prompt("Please select a valid option");
      option = rls.prompt();
      console.clear();
    }
    while (validOptions[0].includes(option)) {
      playerCards.push(cardSelected(deck));
      prompt(`You received a ${playerCards[playerCards.length - 1][0]}`);
      console.log("");
      if (busted(playerCards)) {
        break;
      }
      prompt(`Your cards are ${playerCards.join(", ")}`);
      prompt("What would you like to do\n==> 1) hit \n==> 2) stand");
      option = rls.prompt();
      while (!validOptions[0].includes(option) && !validOptions[1].includes(option)) {
        prompt("Please select a valid option");
        option = rls.prompt();
        console.clear();
      }
    }
    if (busted(playerCards)) {
      prompt("You have busted! Dealer wins");
    } else {
      prompt("Player stands.");
      console.clear();
      console.log("");
      dealerHits(dealerCards, currentDeck);
      if (calculateValue(dealerCards) <= 21) {
        displayWinner(playerCards, dealerCards);
        console.log("");
      } else {
        prompt("Dealer busts! Player wins");
      }
    }
  }

  prompt("Would you like to play again \n==> 1.) yes \n==> 2.) no");
  let response = rls.prompt();
  console.clear();
  while (!playAgain[0].includes(response.toLowerCase()) && !playAgain[1].includes(response.toLowerCase())) {
    prompt("Please select valid option");
    response = rls.prompt();
  }
  if (playAgain[1].includes(response.toLowerCase())) {
    break;
  }
}
console.log("");
prompt("Thanks for playing!");