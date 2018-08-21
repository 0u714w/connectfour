//Create board by using an array of arrays
//Add pieces to board using divs
//Each click set as eventlistener to check result



const gameboard = document.getElementById("gameboard")

let clickNum = 1

const gameColumns = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],

]

for (let i = 0; i < gameColumns.length; i++) {
    let column = document.createElement("div");
    column.classList.add('column');
    column.id = 'column' + (String(i));
    gameboard.appendChild(column)
}


const playChip = function(event) {

    let currentCol = event.currentTarget;

    let idPiece = currentCol.id

    let y = 0
    let x = document.getElementById(currentCol.id).childElementCount;

    console.log(x)

    if (currentCol.childElementCount == 6) {
        return;
    }

    if (clickNum % 2) {


        let redDisc = document.createElement("div")
        redDisc.classList.add('red');
        currentCol.appendChild(redDisc)



    } else {
        let yelDisc = document.createElement("div")
        yelDisc.classList.add('yellow');
        currentCol.appendChild(yelDisc)
    }

    clickNum++

}

var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {

    let column = columns[i];
    column.addEventListener('click', playChip);
}