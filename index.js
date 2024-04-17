// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function () {
    const board = [
        '', '', '', 
        '', '', '', 
        '', '', '',
    ];

    return { board }
})();

// PLAYER OBJECTS
function createPlayer (username, symbol) {
    return { username, symbol }
};

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
function Gamecontroller() {

};