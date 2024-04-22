// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    function getBoard() {
        return board;
    }

    function setSpace(row, column, symbol) {
        if (board[row][column] === '') {
            board[row][column] = symbol;
            return true; // space was successfully marked
        } else {
            return false; // space is occupied
        }
    }

    return { getBoard, setSpace }
})();

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
const GameController = (function () {
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

    // sets beginning/first active player to player 1
    let activePlayer = players[0];

    // returns current active player
    function getPlayer() {
        return activePlayer;
    }

    // switches active player
    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    }
    
    function startGame() {
        console.log('Starting a new game of Tic Tac Toe...')
        console.log(`${activePlayer.name}, select a space.`)
        console.log(Gameboard.getBoard());
    }

    function selectSpace(row, column) {
        // logic to select a space
        isSpaceEmpty(row, column);

        const symbol = activePlayer.symbol;
        if (Gameboard.setSpace(row, column, symbol)) {
            console.log(`${activePlayer.name} has selected space (${row}, ${column})`);
            switchPlayerTurn();
            checkForTie();
            checkForWinner();
        } else {
            console.log('Invalid move. Please select another space.')
        }
    }

    function isSpaceEmpty(row, column) {
        // logic to verify if space is occupied
        if (Gameboard.getBoard()[row][column] !== '') {
            console.log('Selected space is already occupied. Please select another space.')
            return;
        }
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

    return { startGame, activePlayer, getPlayer, switchPlayerTurn, selectSpace };
})();

GameController.startGame();