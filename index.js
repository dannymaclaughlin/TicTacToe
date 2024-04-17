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
function createGameController() {
    function startGame() {
        console.log(Gameboard.board);
    }

    function selectSpace() {
        // logic to select a space
    }

    function isSpaceEmpty() {
        // logic to verify if space is occupied
    }

    function markSpace() {
        // logic to mark space
    }

    function checkForWinner() {
        // logic to check if there is a winner
    }

    function checkForTie() {
        // logic to check for a game ending in a tie
    }

    function endGame() {
        // logic to end a game
    }

    return { startGame };
};

const gamecontroller = createGameController();
gamecontroller.startGame();