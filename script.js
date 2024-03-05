function generateCanvas(){
    canvas.style.display='flex';
    canvas.innerHTML = '';   //clear the canvas
    for(let i=0; i < numberOfCells; i++){

        //add rows of cells
        const canvasRow = document.createElement('div');
        canvasRow.classList.add('canvas-row');
        canvas.appendChild(canvasRow);
        //add cells in each row
        for(let i=0; i < numberOfCells; i++){
            const cell = document.createElement('div');
            cell.classList.add('canvas-cell');
            canvasRow.appendChild(cell);
            //Add color property (default white)
            cell.color = 255;
            //change color on hover
            cell.addEventListener('mouseenter',changeBackground);
        }
    
    }
    startBtn.textContent = 'CLEAR';
}

function changeBackground(event){
    cell = event.target;
    //additive coloring
    let colorPass = Math.round(brightness.value * brightness.eraseEnable * 255);
    //clamp color channel value to [0,255]
    cell.color = Math.max(Math.min(cell.color-colorPass,255),0);
    let color = `rgb(${cell.color},${cell.color},${cell.color})`
    cell.style.backgroundColor = color;
}

function clampValue(event){
    let element = event.target;
    let value = parseFloat(element.value);
    value = Math.max(parseFloat(element.min),Math.min(value,parseFloat(element.max)));
    if (value !== parseFloat(element.value)){
        element.value = value;
    }
}

function switchToEraser(event){
    if(event.key === 'e'){
        brightness.eraseEnable = -1;
    }
    console.log(event.key);
}

function switchToPencil(event){
    if(event.key === 'e'){
        brightness.eraseEnable = 1;
    }
}

function sizeHandler(event){
    clampValue(event);
    numberOfCells=parseInt(size.value);
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
    5.- You can hold the 'e' key to switch erase on hover.
        Every time you hover over a cell you remove some color.
    6.- Click the CLEAR button to generate a new canvas.
    `
    alert(message);
}

const instructions=document.querySelector('#instructions-btn');
instructions.addEventListener('click',showInstructions);

const startBtn=document.querySelector('#start');
startBtn.addEventListener('click',generateCanvas);

const size=document.querySelector('#size');
let numberOfCells = 10;  //Default size 10 X 10 cells
//Change canvas size
size.addEventListener('input', sizeHandler);

const brightness=document.querySelector('#brightness');
//Limit brightness parameter to [0,1]
brightness.addEventListener('input', clampValue);
//Switch to eraser on press key 'e'
brightness.eraseEnable = 1;
document.addEventListener('keypress', switchToEraser)
document.addEventListener('keyup', switchToPencil)

const canvasContainer = document.querySelector('#canvas-container');
const canvas=document.querySelector('#canvas');