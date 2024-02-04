// GAMEBOARD OBJECT (IIFE)
const gameboard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
})();

// PLAYER OBJECT (FACTORY FUNCTION)
function createPlayer (name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;
    return { playerName, playerSymbol };
}

// GAME OBJECT (IIFE)
const game = (function () {

})();