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
    }
    let x_result = Array.from(cells).filter(x => x.innerText == 'X');
    let o_result = Array.from(cells).filter(o => o.innerText == 'O');
    console.log('x', x_result);
    console.log('o', o_result);
    
}

function switchPlayer(){
    return current = current ? false : !current
}

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

function winner() {
    
    // winCombinaison.forEach(comb => {
    //     console.log(comb);
    // });
}

winner()