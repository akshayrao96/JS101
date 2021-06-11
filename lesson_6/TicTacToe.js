/* Steps for constructing game :
1. Display empty board
2. Prompt user to mark a square
3. Prompt computer to mark a square
4. Display updated board state
5. If winning board, display winner
6. If board full, display tie
7. If board empty, repeat step 2
8. Play again?
9. If yes, go to step 1
10. If not, goodbye!
*/

/* board :
in order from left to right, 1-9
*/

const rls = require("readline-sync");

let userMarker;
let computerMarker;

function initializeBoard() {
  let options = {};
  for (let i = 1; i <= 9; i++) {
    options[String(i)] = " ";
  }
  return options;
}

// displays board
function displayBoard(options) {
  console.log("");
  console.log("              |         |          ");
  console.log(
    `         ${options["1"]}    |    ${options["2"]}    |      ${options["3"]}    `
  );
  console.log("              |         |          ");
  console.log("     ---------+---------+----------");
  console.log("              |         |          ");
  console.log(
    `         ${options["4"]}    |    ${options["5"]}    |      ${options["6"]}    `
  );
  console.log("              |         |          ");
  console.log("     ---------+---------+----------");
  console.log("              |         |          ");
  console.log(
    `         ${options["7"]}    |    ${options["8"]}    |      ${options["9"]}    `
  );
  console.log("              |         |          ");
  console.log("");
}

// resets booard
function boardReset(obj) {
  for (let key in obj) {
    obj[key] = " ";
  }
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function squareType(num) {
  let valid = true;
  while (valid) {
    if (Number(num) === 1) {
      userMarker = "O";
      computerMarker = "X";
      valid = false;
    } else if (Number(num) === 2) {
      userMarker = "X";
      computerMarker = "O";
      valid = false;
    } else {
      prompt("Please pick a valid option.\n Please pick:  1. O  2. X");
    }
  }
}

function winningBoard(board) {}

function tiedBoard(board) {}

function playerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");
  let userSquare;

  while (true) {
    prompt(`Please choose square ${emptySquares.join(", ")}`);
    userSquare = rls.prompt();
    if (emptySquares.includes(userSquare)) {
      break;
    } else {
      prompt("Not valid square. Please choose empty square");
    }
  }
  board[userSquare] = userMarker;
}

function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");
  let options = emptySquares.length;
  let computerSquare = emptySquares[Math.floor(Math.random() * options)];
  board[computerSquare] = computerMarker;
}



// main
console.log();
prompt("Welcome to Tic-Tac-Toe game!");
let board = initializeBoard();
displayBoard(board);
prompt("Please pick:  1. O  2. X");
let userChoice = rls.prompt();
console.log();

squareType(userChoice);
prompt(`You are ${userMarker}`);
prompt(`Computer is ${computerMarker}`);
console.log();

prompt("Please choose empty square");
playerChoosesSquare(board);
computerChoosesSquare(board);
displayBoard(board);