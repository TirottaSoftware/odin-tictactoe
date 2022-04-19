const cells = document.querySelectorAll(".cell");
const clearButton = document.querySelector(".btn-clear");

const Gameboard = (() => {
  let array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const clearBoard = () => {
    Gameboard.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    turn = 0;
    displayController.render();
  };
  return { array, clearBoard };
})();

const displayController = (() => {
  const render = () => {
    cells.forEach((cell, index) => {
      cell.textContent = Gameboard.array[index];
    });
  };
  return { render };
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
    cell.textContent = turn % 2 == 0 ? x.marker : o.marker;
    turn++;
  });
});

clearButton.addEventListener("click", () => {
  Gameboard.clearBoard();
});
