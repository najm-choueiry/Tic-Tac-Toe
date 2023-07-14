const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')


const winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]





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
    if (checkWin(currentClass)) {
        console.log('winner')
    }
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


function checkWin(currentClass) {
   return winning_combinations.some( combination=> {
    return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
    })
   })
}