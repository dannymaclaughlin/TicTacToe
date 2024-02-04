// GAMEBOARD OBJECT (IIFE)
const gameboard = (function () {
    // Represents the 9 boardspaces of the tic tac toe board
    const board = ['', '', '', '', '', '', '', '', ''];

    //  Return the board to make it accessible outside of the IIFE
    return {
        board,
        // Returns corresponding board array item
        getSpace(index) {
            return board[index];
        },
        // Assigns symbol to corresponding board array item of the index
        setSpace(index, symbol) {
            // [to-do] validate move and update board if valid
                // Test: Log current board state
                // console.log("Board before:", gameboard.board);
            // Update board
            board[index] = symbol;
                // Test: Log updated board state
                // console.log("Board after:", gameboard.board);
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