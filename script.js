//Create board by using an array of arrays
//Add pieces to board using divs
//Each click set as eventlistener to check result



const gameboard = document.getElementById("gameboard")

let clickNum = 1
var currentPlayer = "";

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
    column.id = 'col-' + (String(i));
    gameboard.appendChild(column)
}

function newId(p) {
    let removeDash = p.split("-");
    let removeLetters = removeDash.pop();
    return removeLetters;
}



const playChip = function(event) {

    let currentCol = event.currentTarget;

    let idPiece = newId(currentCol.id)

    let disc = document.createElement("div");

    if (currentCol.childElementCount == 6) {
        return;
    }



    let y = 0
    let x = document.getElementById(currentCol.id).childElementCount



    if (clickNum % 2) {


        disc.className = ('red');
        gameColumns[idPiece][x + y] = 1
        currentPlayer = "Red";







    } else {
        disc.className = ('yellow');
        gameColumns[idPiece][x + y] = 2
        currentPlayer = "Yellow";


    }

    clickNum++
    currentCol.appendChild(disc)
    console.log()



}


const winVertical = function() {

    for (let y = 0; y < gameColumns.length; y++) {
        let row = gameColumns[y]

        for (let x = 0; x < row.length; x++) {

            let cell = row[x];
            if (cell !== 0) {

                if (cell === gameColumns[y][x + 1] && cell === gameColumns[y][x + 2] && cell === gameColumns[y][x + 3]) {

                    alert(currentPlayer + ' wins')
                }
            }



        }
    }


}

const winHorizontal = function() {

    for (let y = 0; y < gameColumns.length; y++) {
        let row = gameColumns[y];

        for (let x = 0; x < row.length; x++) {
            let cell = gameColumns[y][x];

            if (cell !== 0 && y < gameColumns.length - 3) {
                if (cell === gameColumns[y + 1][x] && cell === gameColumns[y + 2][x] && cell === gameColumns[y + 3][x]) {
                    alert(currentPlayer + ' wins')
                }
            }
        }
    }
}

const winDiagonalRight = function() {
    for (let y = 0; y < gameColumns.length - 3; y++) {
        let row = gameColumns[y];
        for (let x = 0; x < row.length; x++) {
            cell = gameColumns[y][x];
            if (cell !== 0) {
                if (cell === gameColumns[y + 1][x - 1] && cell === gameColumns[y + 2][x - 2] && cell === gameColumns[y + 3][x - 3]) {
                    alert(currentPlayer + ' wins')
                }
            }
        }
    }
}


const winDiagonalLeft = function() {
    for (let y = 0; y < gameColumns.length - 3; y++) {
        let row = gameColumns[y];
        for (let x = 0; x < row.length; x++) {
            cell = gameColumns[y][x];
            if (cell !== 0) {
                if (cell === gameColumns[y + 1][x + 1] && cell === gameColumns[y + 2][x + 2] && cell === gameColumns[y + 3][x + 3]) {
                    alert(currentPlayer + ' wins')
                }
            }
        }
    }
}



var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {

    let column = columns[i];
    column.addEventListener('click', playChip);
    column.addEventListener('click', winVertical);
    column.addEventListener('click', winHorizontal);
    column.addEventListener('click', winDiagonalRight);
    column.addEventListener('click', winDiagonalLeft);

}

document.getElementById("refresh").addEventListener("click", function() {
    window.location.reload()
})