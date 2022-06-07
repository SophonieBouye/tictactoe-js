let cells = document.querySelectorAll("td")

const PLAYER_X = 'X'
const PLAYER_O = 'O'
let current = false
let cellX = []
let cellO = []

// Get Id of cell 
function getCellId(e) {
    let id = e.target.attributes['id'].value;
    mark(id)
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', getCellId, false)
}


//Marks function
function mark(id) {
    let cell = document.getElementById(id)
    
    if(cell.innerText == "") {
        cell.innerText = current ? PLAYER_X : PLAYER_O
        switchPlayer();
    }

    cells.forEach(cell => {
        if(cell.innerText == "O"){
            if(!cellO.find(el => el == cell.attributes['id'].value)){
                cellO.push(cell.attributes['id'].value)
            }
        }else {
            if(!cellX.find(el => el == cell.attributes['id'].value)){
                cellX.push(cell.attributes['id'].value)
            }
        }

    });
    winner(cellO)
    // let x_result = Array.from(cells).filter(x => x.innerText == 'X' ? x.attributes['id'] : '');
    // let o_result = Array.from(cells).filter(o => o.innerText == 'O');
    // console.log('x', x_result);
    // console.log('o', o_result);
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

function winner(result) {

    result = result.map(x => Number(x))
    if(result.length > 2) {
        for(let i = 0; i < winCombinaison.length; i++) {
              for (let y = 0; y < result.length; y++) {
                  console.log(winCombinaison.filter(w => {
                      result.includes(w)
                  }))
              }
        }

    }
}


// if(result.includes(winCombinaison[i][y])){
//     console.log(winCombinaison[i], result);
//     console.log('match find..', winCombinaison[i], result);
// }