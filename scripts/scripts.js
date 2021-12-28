//creating elements for DOM manipulation
const slider = document.getElementById('grid-maker');
const label = document.getElementById('label');
const etchScreen = document.getElementById('screen');
const fibers = document.getElementsByClassName('block');
const blackButton = document.getElementById('black');
const clearButton = document.getElementById('clear');
const eraserButton = document.getElementById('eraser');
const rainbowButton = document.getElementById('rainbow');
const colorSelector = document.getElementById('color-selector');
const myHtml = document.querySelector('html');
let mouseClicked = false;



//gets rid of grid
const deleteGrid = function () {
  while (etchScreen.firstChild) {
    etchScreen.removeChild(etchScreen.firstChild);
  }
};

//slider value reset for clearButton
const valueZero = function() {
  slider.value = 0;
  label.textContent = slider.value;
}


//creates grid in etch a sketch
const gridMaker = function () {
  deleteGrid();
  let gridNumber = this.value;
  label.textContent = gridNumber;
  etchScreen.style.cssText = `grid-template-columns: repeat(${gridNumber}, 1fr); grid-template-rows: repeat(${gridNumber}, 1fr);`;

  for (let i = 0; i < gridNumber ** 2; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList = 'block';
    etchScreen.appendChild(newDiv);
  }
};


//slider functionality
slider.addEventListener('input', gridMaker);

//color divs black in etch-a-sketch
const black = function() {
  if(mouseClicked === true){
  this.style.cssText = 'background-color: black;';
  }
};

//clearing event listeners to add new one
let clearEventListeners = function() {
  document.querySelectorAll('.block').forEach(block => {
    block.removeEventListener('mouseover', black);
  });

  document.querySelectorAll('.block').forEach(block => {
    block.removeEventListener('mouseover', rainbow);
  })

  document.querySelectorAll('.block').forEach(block => {
    block.removeEventListener('mouseover', colorSelection);
  })

  document.querySelectorAll('.block').forEach(block => {
    if(mouseClicked === true){
      block.removeEventListener('mouseover', erase);
    }
  });
};

//function for blackButton
let addBlack = function() {
  clearEventListeners();
  document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', black);
  })

};



//blackButton functionality
blackButton.addEventListener('click', addBlack);


//color divs rainbow in etch-a-scketch
let rainbow = function() {
   
  if(mouseClicked === true){
    // this.style.cssText = '';
    this.style.cssText = `background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});`;
  }
  
};

//set up rainbow button functionality
let addRainbow = function() {
  clearEventListeners();

  document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', rainbow);
  });
}


//add rainbowButton functionality
rainbowButton.addEventListener('click', addRainbow);

//clear button functionality
clearButton.addEventListener('click', valueZero);
clearButton.addEventListener('click', deleteGrid);


//erase or remove color from divs in etch-a-sketch
let erase = function() {
  
  if(mouseClicked === true){
    // this.style.cssText = '';
    this.style.cssText = 'background-color: transparent;'
  }
};


//set up eraser button functionality
let addEraser = function() {
  clearEventListeners();

  document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', erase);
  });
};


//add eraserButton functionality
eraserButton.addEventListener('click', addEraser);

//color divs a chosen color in etch-a-sketch
let colorSelection = function() {
  
  if(mouseClicked === true){
    let chosenColor = colorSelector.value
    this.style.cssText = `background-color: ${chosenColor}`;
  }
};

// set up color selector functionality
let addChosenColor = function() {
  clearEventListeners();

  document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', colorSelection);
  })
}

//add colorSelector functionality
colorSelector.addEventListener('input', addChosenColor);


//making functionality for mandatory mouse click for drawing
const checkDown = function(e){
  mouseClicked = true;
}

const checkUp = function() {
  mouseClicked = false;
} 

myHtml.addEventListener('mousedown', checkDown);
myHtml.addEventListener('mouseup', checkUp)