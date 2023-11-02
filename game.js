// gameboard
let board = document.getElementById('board')
let slots = [];


function makeBoard() {
    for(let i = 0; i < 9; i++) {
        let div = document.createElement('div')
        div.className = 'gameslot'
        div.id = 'slot' + i
        div.innerHTML = ''
        div.addEventListener('click', () => playerChoice(div.id))
        board.appendChild(div)
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

// players

const players = {
    player1Name: 'Gamer1',
    player1Symbol: 'x',

    player2Name: 'Gamer2',
    player2Symbol: 'o',
};

// gameplay
let allSlots = document.getElementsByClassName('gameslot')


function playerChoice(slotNum) {
    let testString = String(slotNum)
    let testNum = testString.split("")
    let actualNum = Number(testNum[4])
    if (allSlots[actualNum].innerHTML == '') {
        allSlots[actualNum].innerHTML = 'x'
        comChoice()
    } else {
        alert('Tile is already taken. Please select an open option. :)')
    }
}

function comChoice() {
    if (checkPlayerWin()) {
    } else if (checkTie()) {
    } else { 
        let randomSlot = Math.floor(Math.random() * 9)
        if (allSlots[randomSlot].innerHTML == '') {
            allSlots[randomSlot].innerHTML = 'o'
            checkComWin()
        } else {
            comChoice()
        }
    }
    }

function checkPlayerWin() {
    if (
        allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML == 'xxx' || 
        allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML == 'xxx' || 
        allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML == 'xxx' ||
        allSlots[0].innerHTML + allSlots[3].innerHTML + allSlots[6].innerHTML == 'xxx' ||
        allSlots[1].innerHTML + allSlots[4].innerHTML + allSlots[7].innerHTML == 'xxx' ||
        allSlots[2].innerHTML + allSlots[5].innerHTML + allSlots[8].innerHTML == 'xxx' ||
        allSlots[0].innerHTML + allSlots[4].innerHTML + allSlots[8].innerHTML == 'xxx' ||
        allSlots[2].innerHTML + allSlots[4].innerHTML + allSlots[6].innerHTML == 'xxx') {
            alert('You win! Reset the board and play again!')
            for (let i = 0; i < 9; i++) {
                allSlots[i].className += ' winner'
            }
            return true
    } else {
        return false
    }
}

function checkTie() {
    let all = allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML + allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML + allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML;

    if (all.length == 9) {
        alert('Tie game! Reset the board and play again!')
        return true
} else {
    return false
}
}

function checkComWin() {
    let all = allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML + allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML + allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML;
    if (
        allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML == 'ooo' || 
        allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML == 'ooo' || 
        allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML == 'ooo' ||
        allSlots[0].innerHTML + allSlots[3].innerHTML + allSlots[6].innerHTML == 'ooo' ||
        allSlots[1].innerHTML + allSlots[4].innerHTML + allSlots[7].innerHTML == 'ooo' ||
        allSlots[2].innerHTML + allSlots[5].innerHTML + allSlots[8].innerHTML == 'ooo' ||
        allSlots[0].innerHTML + allSlots[4].innerHTML + allSlots[8].innerHTML == 'ooo' ||
        allSlots[2].innerHTML + allSlots[4].innerHTML + allSlots[6].innerHTML == 'ooo') {
            alert('You lose! Reset the board and play again!')
            for (let i = 0; i < 9; i++) {
                allSlots[i].className += ' loser'
            }
            return true
    } else {
        return false
    }
    }
    