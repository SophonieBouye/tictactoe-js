let cells = document.querySelectorAll("td")

const PLAYER_X = 'X'
const PLAYER_O = 'O'
let current = false

function getCellId(e) {
    let id = e.target.attributes['id'].value;

    mark(id)
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', getCellId, false)
}

function mark(id) {
    
    let cell = document.getElementById(id)
    
    if(cell.innerText == "") {
        cell.innerText = current ? PLAYER_X : PLAYER_O
        switchPlayer();
    } else {
        console.log("already taken")
    }
}


function switchPlayer(){
    return current = current ? false : !current
}