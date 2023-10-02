const gameboard = (function() {
    const gameboard = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];

    (function initializeGameboard() {
        for(i = 0; i < gameboard.length; i++) {
            const cell = document.getElementById(`cell-${i}`);
            cell.textContent = gameboard[i];
        }
    })();

})();

const player = (name) => {
    return { name };
};

let player1 = player('player 1');
let player2 = player('player 2');

const game = {

};