const gameboard = (function() {
    const gameboard = [];

    (function initializeGameboard() {
        for(i=0; i<9; i++) {
            const boardSpaces = document.createElement('div');
            boardSpaces.className = 'boardSpaces';
            document.getElementById('gameboard').appendChild(boardSpaces);
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