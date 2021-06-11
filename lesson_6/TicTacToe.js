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
  console.clear();

  prompt("Welcome to Tic Tac Toe!");

  console.log();
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

function winningBoard(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let i = 0; i < winningLines.length; i++) {
    let [sq1, sq2, sq3] = winningLines[i];
    if (board[sq1] === userMarker &&
      board[sq2] === userMarker && board[sq3] == userMarker) {
      return "Player"
    } else if (board[sq1] === computerMarker &&
      board[sq2] === computerMarker && board[sq3] == computerMarker) {
      return "Computer"
    }
  }
  return null;
}

function fullBoard(board) {
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");
  return emptySquares.length === 0;
}

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

function main() {
  console.log();
  let board = initializeBoard();
  displayBoard(board);
  prompt("Please pick:  1. O  2. X");
  let userChoice = rls.prompt();
  console.log();

  squareType(userChoice);
  prompt(`You are ${userMarker}`);
  prompt(`Computer is ${computerMarker}`);
  console.log();

  while (true) {
    prompt("Please choose empty square");
    playerChoosesSquare(board);
    if (winningBoard(board) || fullBoard(board)) {
      break;
    }
    computerChoosesSquare(board);
    if (winningBoard(board) || fullBoard(board)) {
      break;
    }
    displayBoard(board);
  }
  displayBoard(board);
  if (winningBoard(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  main();
  prompt("Play again? (y or n)");
  let answer = rls.question().toLowerCase()[0];
  if (answer !== "y") {
    break;
  }
}
prompt("Thanks for playing Tic Tac Toe!");