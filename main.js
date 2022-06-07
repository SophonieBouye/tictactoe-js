let cells = Array.from(document.querySelectorAll(".cell"))
let board = document.querySelector(".board")
const PLAYER_X = 'X'
const PLAYER_O = 'O'
let winner = ""
let winnerMessage = ""
let currentPlayer = PLAYER_X
const winCombinaison = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner(winnerCombinaison, currentPlayer) {
    winnerCombinaison.forEach(combinaison => {
        let counter = 0
        combinaison.forEach(element => {
            if(cells[element].innerHTML == currentPlayer) {
                counter++;
                if(counter == 3 ) {
                    winner = currentPlayer
                    winnerMessage = `${winner} is the Winner`
                    document.querySelector('.message').innerHTML = winnerMessage
                }
            }
        })
    })
}


//Move function
function move(e) {
    if(e.target.className == "cell" && e.target.innerHTML == "") {
        e.target.innerHTML = currentPlayer;
        checkWinner(winCombinaison, currentPlayer)
        currentPlayer = (currentPlayer == PLAYER_X) ? PLAYER_O : PLAYER_X
    }

}

board.addEventListener("click", move)