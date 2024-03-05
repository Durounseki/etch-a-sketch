function generateCanvas(){
    canvas.style.display='flex';
    canvas.innerHTML = '';   //clear the canvas
    for(let i=0; i < numberOfCells; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        canvas.appendChild(cell);
    } 
    // height.addEventListener('input', () => canvas.style.height = `${height.value*cellSize}px`);
}

function setWidth(){

}

function showInstructions(){
    message = `
    Etch-a-Sketch controls
    1.- Click the START/CLEAR button to generate a new canvas.
    2.- Select the size of your new canvas.
    3.- Select the stroke intensity, 0 < brightness < 1.
        The brightness determines the number of strokes, n,
        required to fully color one cell, 1 = n * brightness.
    4.- Hover your mouse over a grid cell to change the color.
    5.- Click the CLEAR button to generate a new canvas.
    `
    alert(message);
}

const instructions=document.querySelector('#instructions');
instructions.addEventListener('click',showInstructions);

const startBtn=document.querySelector('#start');
startBtn.addEventListener('click',generateCanvas);

const size=document.querySelector('#size');
let numberOfCells = 100;  //Default size 10 X 10 cells
size.addEventListener('input', () => {numberOfCells=parseInt(size.value)**2;});
// const height=document.querySelector('#height');
const brightness=document.querySelector('#brightness');
// size.addEventListener('input', () => canvas.style.width = `${width.value*cellSize}px`);

const canvas=document.querySelector('#canvas');