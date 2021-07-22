// query selectors
const gridContainer = document.querySelector('.container');
const resetButton = document.querySelector('#reset');
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

// grid size variable
let numBox = 42;

// function to create canvas
function createCanvas(numBox) {
  for (let i = 0; i < numBox * numBox; i++) {
    let gridBox = document.createElement('div');
    gridContainer.appendChild(gridBox);
    gridBox.classList.add('box');
    gridContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
  }
}

// call function to create canvas
createCanvas(numBox);

// querySelector for the grid inside the container
const squares = document.querySelectorAll('.box');

// iterate to add event listeners to all .square div
squares.forEach((sqaure) => {
  sqaure.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = '#' + randomColor;
  });
});

//event listener to reset the grid canvas
resetButton.addEventListener('click', function () {
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
  });
  clearGrid();
  promptSize();
});

//function to clear previous grid
function clearGrid() {
  const lastGrid = document.querySelectorAll('.box');
  lastGrid.forEach((box) => {
    gridContainer.removeChild(box);
  });
}

// function to prompt user for grid size
function promptSize() {
  let newGrid = prompt('Please enter size of the grid (min:16 - max:100)');
  newGrid = parseInt(newGrid);

  //loop to check the prompt input
  if (newGrid < 16 || newGrid > 100) {
    promptSize();
  } else {
    createCanvas(newGrid);
  }

  // querySelector for the grid inside the container
  const squares = document.querySelectorAll('.box');

  // iterate to add event listeners to all .square div
  squares.forEach((sqaure) => {
    sqaure.addEventListener('mouseenter', function (e) {
      e.target.style.backgroundColor = '#' + randomColor;
    });
  });
}
