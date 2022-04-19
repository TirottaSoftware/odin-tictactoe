const cells = document.querySelectorAll(".cell");
const clearButton = document.querySelector(".btn-clear");
const resultElement = document.querySelector(".result");

const winningCombinations = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let playerXcombo = [];
let playerOcombo = [];

let boardEnabled = true;

const Gameboard = (() => {
  let array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const clearBoard = () => {
    Gameboard.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    playerXcombo = [];
    playerOcombo = [];

    turn = 0;
    displayController.render();
  };

  const checkWinnerX = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      // Compare playerX's combo with a winning combo
      if (
        playerXcombo.indexOf(winningCombinations[i][0]) >= 0 &&
        playerXcombo.indexOf(winningCombinations[i][1]) >= 0 &&
        playerXcombo.indexOf(winningCombinations[i][2]) >= 0
      ) {
        displayController.renderResult("Player X wins.");
      }
    }
  };

  const checkWinnerO = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      // Compare playerX's combo with a winning combo
      if (
        playerOcombo.indexOf(winningCombinations[i][0]) >= 0 &&
        playerOcombo.indexOf(winningCombinations[i][1]) >= 0 &&
        playerOcombo.indexOf(winningCombinations[i][2]) >= 0
      ) {
        displayController.renderResult("Player O wins.");
      }
    }
  };

  return { array, clearBoard, checkWinnerX, checkWinnerO };
})();

const displayController = (() => {
  const render = () => {
    cells.forEach((cell, index) => {
      cell.textContent = Gameboard.array[index];
    });
  };
  const renderResult = (result) => {
    resultElement.textContent = result;
    boardEnabled = false;
    clearButton.style.display = "none"; // You can also use classList.toggle('btn-hidden')
    setTimeout(() => {
      boardEnabled = true;
      clearButton.style.display = "block";
      resultElement.textContent = "";
      Gameboard.clearBoard();
    }, 3000);
  };
  return { render, renderResult };
})();

displayController.render();

const playerFactory = (marker) => {
  return { marker };
};

const x = playerFactory("X");
const o = playerFactory("O");

let turn = 0;

// Adding a click event to each cell

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (boardEnabled) {
      if (turn == 9) {
        displayController.renderResult("Tie!");
      }
      if (cell.textContent == " ") {
        if (turn % 2 == 0) {
          cell.textContent = x.marker;
          playerXcombo.push(index + 1);
          Gameboard.checkWinnerX();
        } else {
          cell.textContent = o.marker;
          playerOcombo.push(index + 1);
          Gameboard.checkWinnerO();
        }
        turn++;
        console.log(turn);
      }
    }
  });
});

clearButton.addEventListener("click", () => {
  Gameboard.clearBoard();
});
