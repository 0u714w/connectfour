//Create board by using an array of arrays
//Add pieces to board using divs
//Each click set as eventlistener to check result



const gameboard = document.getElementById("gameboard")
let clickNum = 0

const gameColumns = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

for (let i = 0; i < gameColumns.length; i++) {
    let column = document.createElement("div");
    column.classList.add('column');
    column.id = 'column' + (String(i));
    gameboard.appendChild(column)
}


const playChip = function(event) {

    let currentCol = event.currentTarget;

    if (clickNum % 2) {

        let redDisc = document.createElement("div")
        redDisc.classList.add('red');
        currentCol.appendChild(redDisc)


        console.log(currentCol)
    } else {
        let blackDisc = document.createElement("div")
        blackDisc.classList.add('black');
        currentCol.appendChild(blackDisc)
    }

    clickNum++





}

var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {

    let column = columns[i];
    column.addEventListener('click', playChip);
}