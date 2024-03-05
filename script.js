function generateCanvas(){
    canvas.style.display='flex';
    
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

const canvas=document.querySelector('.canvas');