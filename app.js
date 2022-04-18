const cells = document.querySelectorAll(".cell");
const clearButton = document.querySelector(".btn-clear");

const Gameboard = (() => {
  let array = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const clearBoard = () => {
    array = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    displayController.render();
  };
  return { array, clearBoard };
})();

const displayController = (() => {
  const render = () => {
    for (let i = 0; i < Gameboard.array.length; i++) {
      //Populating each cell according to the gameboard array
      for (let j = 0; j < Gameboard.array[i].length; j++) {
        cells[
          (i + 1) * (j + 1) + i * (Gameboard.array.length - (j + 1)) - 1
        ].textContent = Gameboard.array[i][j];
      }
    }
  };
  return { render };
})();

displayController.render();

const playerFactory = (marker) => {
  return { marker };
};

const x = playerFactory("X");
const o = playerFactory("O");

let playerTurn = true;

// Adding a click event to each cell

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent == " ") {
      cell.textContent = playerTurn ? x.marker : o.marker;
      playerTurn = !playerTurn;
    }
  });
});

clearButton.addEventListener("click", () => {
  Gameboard.clearBoard();
});
