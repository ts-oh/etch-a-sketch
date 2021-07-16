// query selectors
const gridCanvas = document.querySelector('.container');
const resetButton = document.querySelector('#reset');

// grid size variable
const width = 16;
// call function to create canvas
createCanvas();

// function to create canvas
function createCanvas() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    gridCanvas.appendChild(square);
    square.classList.add('etch');
  }
}

// queryselector for newly created div class .etch
const squares = gridCanvas.querySelectorAll('.etch');

// iterate to add event listeners to all .etch div
squares.forEach((squares) => {
  squares.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = 'black';
  });
});

//event listener ro reset the grid canvas
resetButton.addEventListener('click', function () {
  const squares = gridCanvas.querySelectorAll('.etch');
  squares.forEach((squares) => {
    squares.style.backgroundColor = 'lightgray';
  });
  promptSize();
});

// function to prompt user for grid size
function promptSize() {
  const gridSize = prompt('Please enter size of the grid (max 100)');
  alert(gridSize);
}
