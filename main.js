let etchMode = 'black';

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

function createGrid(size) {
    let container = document.querySelector('.container');
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    addEtch();
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function addEtch() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            if (etchMode === 'black') {
                square.classList.add(etchMode)
            } else {
                // remove class .black if the square has that class
                if (square.classList.contains('black')) square.classList.remove('black');
                square.style.background = `rgb(${randomRGB()},${randomRGB()}, ${randomRGB()})`;
            }
        });
    });
}

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        if (square.classList.contains('black')) {
            square.classList.remove('black');
        }
        square.style.background = '';
    });
    let newSquareLength = 16;
    do {
        newSquareLength = prompt('Enter a new grid size between 1-100:', '');
        // if user clicks 'Cancel'
        if (newSquareLength === null) break;
    } while (+newSquareLength < 1 || +newSquareLength > 100);
    if (newSquareLength !== null) createGrid(+newSquareLength);
});

let etchModeBlackButton = document.querySelector('.btn-black');
etchModeBlackButton.addEventListener('click', () => {
    etchMode = 'black';
});

let etchModeRandomButton = document.querySelector('.btn-random');
etchModeRandomButton.addEventListener('click', () => {
    etchMode = 'random';
});

createGrid(16);