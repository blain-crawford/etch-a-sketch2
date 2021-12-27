//creating elements for DOM manipulation
const slider = document.querySelector('#grid-maker');
const label = document.querySelector('#label');
const etchScreen = document.querySelector('#screen');
const blackButton = document.querySelector('#black');
const fibers = document.getElementsByClassName('block');


//gets rid of grid
const deleteGrid = function(){
    while(etchScreen.firstChild){
      etchScreen.removeChild(etchScreen.firstChild);
  }
}
//creates grid in etch a sketch
const gridMaker = function() {
  deleteGrid();
  let gridNumber = this.value;
  label.textContent = gridNumber;
  etchScreen.style.cssText = `grid-template-columns: repeat(${gridNumber}, 1fr); grid-template-rows: repeat(${gridNumber}, 1fr);`

  for(let i = 0; i < gridNumber**2; i++){
    let newDiv = document.createElement('div');
    newDiv.classList = 'block'
    newDiv.addEventListener('mouseover', black);
    etchScreen.appendChild(newDiv);
  }
};

slider.addEventListener('input', gridMaker);

//color divs in etch-a-sketch
const black = function() {
  this.style.cssText = 'background-color: black;';
};





