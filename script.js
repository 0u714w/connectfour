//Create board by using an array of arrays
//Add pieces to board using divs
//Each click set as eventlistener to check result



const gameboard = document.getElementById("gameboard")

let clickNum = 1
var currentPlayer = "";

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
    column.id = 'col-' + (String(i));
    gameboard.appendChild(column)
}





const playChip = function(event) {

    let currentCol = event.currentTarget;


    let disc = document.createElement("div");

    if (currentCol.childElementCount == 6) {
        return;
    }



    let y = 0
    let x = document.getElementById(currentCol.id).childElementCount



    if (clickNum % 2) {


        disc.className = ('red');
        currentPlayer = "Red";







    } else {
        disc.className = ('yellow');
        currentPlayer = "Yellow";


    }

    clickNum++
    currentCol.appendChild(disc)
    console.log()



}



var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {

    let column = columns[i];
    column.addEventListener('click', playChip);

}

document.getElementById("refresh").addEventListener("click", function() {
    window.location.reload()
})