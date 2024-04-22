// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    function getBoard() {
        return Gameboard.board;
    }

    return { board, getBoard }
})();

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
function GameController() {
    const players = [
        {
            name: 'Player 1',
            symbol: 'X'
        },
        {
            name: 'Player 2',
            symbol: 'O'
        }
    ];

    let activePlayer = players[0];

    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    }

    function getPlayer() {
        return activePlayer;
        console.log(activePlayer);
    }
    
    function startGame() {
        console.log('Starting a new game of Tic Tac Toe...')
        console.log('Player 1, select a space.')
        console.log(Gameboard.getBoard());
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

    return { startGame, activePlayer, getPlayer };
};

const gamecontroller = GameController();
gamecontroller.startGame();