document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div");
    const result = document.querySelector("#result");
    const displayCurrentPlayer = document.querySelector("#current-player");
    let currentPlayer = 1;

    for (var i = 0, len = squares.length; i < len; i++)
        (function (index) {
            //add an onClick to each square in the grid
            squares[i].onclick = function () {
                // if the square below the current square is taken, you can go ontop of it
                if (squares[index + 7].classList.contains("taken")) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add("taken");
                        squares[index].classList.add("player-one");
                        // change player
                        currentPlayer = 2;
                        displayCurrentPlayer.innerHTML = currentPlayer;
                    } else if (currentPlayer === 2) {
                        squares[index].classList.add("taken");
                        squares[index].classList.add("player-two");
                        // change player
                        currentPlayer = 1;
                        displayCurrentPlayer.innerHTML = currentPlayer;
                    }
                } else {
                    alert("Can't go here");
                }
            };
        })(i);
});
