const cells = document.querySelectorAll(".cell");

const Gameboard = (() => {
  let array = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  return { array };
})();

const displayController = (() => {
  const render = () => {
    for (let i = 0; i < Gameboard.array.length; i++) {
      for (let j = 0; j < Gameboard.array[i].length; j++) {
        cells[
          (i + 1) * (j + 1) + i * (Gameboard.array.length - (j + 1)) - 1
        ].textContent = Gameboard.array[i][j];
      }
    }
  };
  return { render };
})();
