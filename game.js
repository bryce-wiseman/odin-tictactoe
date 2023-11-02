// gameboard
window.onload = prepChoices;
let board = document.getElementById('board')
let slots = [];

function makeBoard() {
    for(let i = 0; i < 9; i++) {
        let div = document.createElement('div')
        div.className = 'gameslot'
        div.id = 'slot' + i
        board.appendChild(div)
        let slotBtn = document.createElement('button')
        slotBtn.className = 'slotBtn'
        slotBtn.id = 'btn' + i
        slotBtn.value = i
        slotBtn.innerHTML = ''
        slotBtn.addEventListener('click', () => playerChoice(slotBtn.value))
        div.appendChild(slotBtn)
        slots.push(div)
    }
}
makeBoard()

function clearBoard() {
   while(board.hasChildNodes()) {
       board.removeChild(board.firstChild)
    }
    makeBoard()
}

function prepChoices() {
    let btn0 = document.getElementById('btn0')
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
    let btn3 = document.getElementById('btn3')
    let btn4 = document.getElementById('btn4')
    let btn5 = document.getElementById('btn5')
    let btn6 = document.getElementById('btn6')
    let btn7 = document.getElementById('btn7')
    let btn8 = document.getElementById('btn8')

   

}

// players

const players = {
    player1Name: 'Gamer1',
    player1Symbol: 'x',

    player2Name: 'Gamer2',
    player2Symbol: 'o',
};

// gameplay
let btns = document.getElementsByClassName('slotBtn')

function playerChoice(slotNum) {
    if (btns[slotNum].innerHTML == '') {
        btns[slotNum].innerHTML = 'x'
        comChoice()
    } else {
        alert('Tile is already taken. Please select an open option. :)')
    }
}

function comChoice() {
    let randomSlot = Math.floor(Math.random() * 9)
    console.log(randomSlot)
    if(btns[randomSlot].innerHTML == '') {
        btns[randomSlot].innerHTML = 'o'
    } else {
        comChoice()
    }
}

function checkForWin() {
    
}
