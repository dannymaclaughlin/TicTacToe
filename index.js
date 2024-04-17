const Gameboard = (function () {
    const board = [
        '', '', '', 
        '', '', '', 
        '', '', '',
    ];

    return { board }
})();

function createPlayer (username, symbol) {
    return { username, symbol }
};

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'X');