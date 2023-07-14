const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')

const x_class = 'x'
const circle_class = 'circle'

let circleTurn


startGame()

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
    });
    setBoardHoverClass()
    
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class 
    placeMark (cell, currentClass)   
    // place mark
    // check for win
    // check for draw
    // switch turns
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn  = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(x_class)
    board.classList.remove(circle_class_class)
    if(circleTurn) {
        board.classList.add(circle_class)
    } else {
        board.classList.add(x_class)
    }
}
