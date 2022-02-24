const gridContainer = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const rangeButton = document.querySelector("#input-range");

rangeButton.addEventListener("click", numBoxChange);

let numBox = 40;

function numBoxChange() {
  clearGrid();
  numBox = rangeButton.value;
  createCanvas(numBox);
}

const randomColor = function () {
  const letters = "0123456789ABCDEF";
  let color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function createCanvas(numBox) {
  for (let i = 0; i < numBox * numBox; i++) {
    let gridBox = document.createElement("div");
    gridContainer.appendChild(gridBox);
    gridBox.classList.add("box");
    gridContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
  }

  const squares = document.querySelectorAll(".box");

  squares.forEach((sqaure) => {
    sqaure.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "#" + randomColor();
    });
  });
}

createCanvas(numBox);

resetButton.addEventListener("click", function () {
  const squares = document.querySelectorAll(".box");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
  clearGrid();
});

function clearGrid() {
  const lastGrid = document.querySelectorAll(".box");
  lastGrid.forEach((box) => {
    gridContainer.removeChild(box);
  });
  createCanvas(numBox);
}
