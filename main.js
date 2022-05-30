let cells = document.querySelectorAll("td")

function getCellId(e) {
    let id = e.target.attributes['id'].value;
    console.log(id)
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', getCellId, false)
}