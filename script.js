function generateCanvas(){
    canvas.style.display='flex';
    canvas.innerHTML = '';   //clear the canvas
    for(let i=0; i < numberOfCells; i++){

        const canvasRow = document.createElement('div');
        canvasRow.classList.add('canvas-row');
        canvas.appendChild(canvasRow);
        for(let i=0; i < numberOfCells; i++){
            const cell = document.createElement('div');
            cell.classList.add('canvas-cell');
            canvasRow.appendChild(cell);
            //Add property to track how many times we have hovered over the cell
            // cell.hoverCount = 0;
            cell.color = 255;
            cell.addEventListener('mouseenter',changeBackground);
        }
    
    }
    startBtn.textContent = 'CLEAR';
    // height.addEventListener('input', () => canvas.style.height = `${height.value*cellSize}px`);
}

function changeBackground(event){
    cell = event.target;
    // console.log(cell.hoverCount);
    //Additive brightness
    // if(cell.hoverCount < Math.ceil(1 / brightnessInput.value)){
    //     cell.hoverCount++;
    // }
    //Ensure brightness is between 0 and 1
    // brightness = 1-Math.max(0, Math.min(brightnessInput.value,1));

    let colorPass = Math.round(brightness.value * 255);
    cell.color = Math.max(Math.min(cell.color-colorPass,255),0);
    console.log(cell.color);
    let color = `rgb(${cell.color},${cell.color},${cell.color})`
    cell.style.backgroundColor = color;
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

const instructions=document.querySelector('#instructions-btn');
instructions.addEventListener('click',showInstructions);

const startBtn=document.querySelector('#start');
startBtn.addEventListener('click',generateCanvas);

const size=document.querySelector('#size');
let numberOfCells = 10;  //Default size 10 X 10 cells
size.addEventListener('input', () => {numberOfCells=parseInt(size.value);});
// const height=document.querySelector('#height');
const brightness=document.querySelector('#brightness');
// size.addEventListener('input', () => canvas.style.width = `${width.value*cellSize}px`);

const canvasContainer = document.querySelector('#canvas-container');
const canvas=document.querySelector('#canvas');