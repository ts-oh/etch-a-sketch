// query selectors
const gridContainer = document.querySelector('.container');
const resetButton = document.querySelector('#reset');

// rainbow effect on hover
const randomColor = function () {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// initial grid size variable
let numBox = 42;

function createCanvas(numBox) {
  for (let i = 0; i < numBox * numBox; i++) {
    let gridBox = document.createElement('div');
    gridContainer.appendChild(gridBox);
    gridBox.classList.add('box');
    gridContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
  }

  const squares = document.querySelectorAll('.box');

  // iterate to add event listeners to all .square div
  squares.forEach((sqaure) => {
    sqaure.addEventListener('mouseenter', function (e) {
      e.target.style.backgroundColor = '#' + randomColor();
    });
  });
}

createCanvas(numBox);

//event listener to reset the grid canvas
resetButton.addEventListener('click', function () {
  const squares = document.querySelectorAll('.box');
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
}
