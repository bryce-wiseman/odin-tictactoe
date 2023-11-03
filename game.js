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
let form = document.getElementById('player-form')
let p1 = document.querySelector('#playerOne')
let s1 = document.querySelector('#symbolOne')
let p2 = document.querySelector('#playerTwo')
let s2 = document.querySelector('#symbolTwo')

const players = {
    player1Name: 'Player 1',
    player1Symbol: 'x',

    player2Name: 'Player 2',
    player2Symbol: 'o',
};

function showForm() {
    form.style.display = 'block'
}

function hideForm() {
    form.style.display = 'none'
}

function updatePlayers() {
    players.player1Name = p1.value
    players.player1Symbol = s1.value
    players.player2Name = p2.value
    players.player2Symbol = s2.value
    console.log(players)
    hideForm()
}

document.getElementById("formSubmit").addEventListener("click",(event)=>{
    event.preventDefault();
})

// gameplay
let allSlots = document.getElementsByClassName('gameslot')


function playerChoice(slotNum) {
    let testString = String(slotNum)
    let testNum = testString.split("")
    let actualNum = Number(testNum[4])
    if (allSlots[actualNum].innerHTML == '') {
        allSlots[actualNum].innerHTML = players.player1Symbol
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
            allSlots[randomSlot].innerHTML = players.player2Symbol
            checkComWin()
        } else {
            comChoice()
        }
    }
    }

function checkPlayerWin() {
    if (
        allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol || 
        allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol || 
        allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol ||
        allSlots[0].innerHTML + allSlots[3].innerHTML + allSlots[6].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol ||
        allSlots[1].innerHTML + allSlots[4].innerHTML + allSlots[7].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol ||
        allSlots[2].innerHTML + allSlots[5].innerHTML + allSlots[8].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol ||
        allSlots[0].innerHTML + allSlots[4].innerHTML + allSlots[8].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol ||
        allSlots[2].innerHTML + allSlots[4].innerHTML + allSlots[6].innerHTML == players.player1Symbol + players.player1Symbol + players.player1Symbol) {
            alert(players.player1Name + ' wins! Reset the board and play again!')
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
        allSlots[0].innerHTML + allSlots[1].innerHTML + allSlots[2].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol || 
        allSlots[3].innerHTML + allSlots[4].innerHTML + allSlots[5].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol || 
        allSlots[6].innerHTML + allSlots[7].innerHTML + allSlots[8].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol ||
        allSlots[0].innerHTML + allSlots[3].innerHTML + allSlots[6].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol ||
        allSlots[1].innerHTML + allSlots[4].innerHTML + allSlots[7].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol ||
        allSlots[2].innerHTML + allSlots[5].innerHTML + allSlots[8].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol ||
        allSlots[0].innerHTML + allSlots[4].innerHTML + allSlots[8].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol ||
        allSlots[2].innerHTML + allSlots[4].innerHTML + allSlots[6].innerHTML == players.player2Symbol + players.player2Symbol + players.player2Symbol) {
            alert(players.player2Name + ' wins! Reset the board and play again!')
            for (let i = 0; i < 9; i++) {
                allSlots[i].className += ' loser'
            }
            return true
    } else {
        return false
    }
    }
    