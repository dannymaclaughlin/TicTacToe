// GAMEBOARD OBJECT (IIFE)
const gameboard = (function () {
    // Represents the 9 boardspaces of the tic tac toe board
    const board = ['', '', '', '', '', '', '', '', ''];

    //  Return the board to make it accessible outside of the IIFE
    return {
        getSpace(index) {
            return board[index];
            console.log(board[index]);
        },
        setSpace(index, symbol) {
            // [to-do] validate move and update board if valid
            board[index] = symbol;
        }
    }
})();

// PLAYER OBJECT (FACTORY FUNCTION): Creates new player objects
function createPlayer (name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;
    return {
        playerName: playerName,
        playerSymbol: playerSymbol
    };
}

// GAME OBJECT (IIFE): Manages the overall game logic
const game = (function () {

})();