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

    function markSpace(row, column, symbol) {
        if ( board[row][column] === '' ) {
            board[row][column] = symbol;
            return true; // space was successfully marked
        } else {
            return false; // space is occupied
        }
    }

    return { getBoard, markSpace }
})();

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
const GameController = (function () {
    // player objects
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

    // sets the beginning/first active player to player 1
    let activePlayer = players[0];
    
    // switches active player
    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
            console.log(`${activePlayer}, select a space.`);
        } else {
            activePlayer = players[0];
            console.log(`${activePlayer}, select a space.`);
        }
    }
    
    // returns current active player
    function getPlayer() {
        return activePlayer;
    }

    function startGame() {
        console.log('Starting a new game of Tic Tac Toe...')
        console.log(`${activePlayer.name}, select a space.`)
        console.log(Gameboard.getBoard());
    }

    // function to check if space is empty
    function isSpaceEmpty(row, column) {
        if (Gameboard.getBoard()[row][column] !== '') {
            // display this message if the space is occupied
            console.log('Selected space is already occupied. Please select another space.')
            return false;
        } else {
            return true;
        }
    }

    function selectSpace(row, column) {
        // changes from 0-indexed to 1-indexed for user input
        row = row - 1;
        column = column - 1;
        
        // runs function to check if the space is empty
            // if empty, it will return true
            // if occupied, it will return false
        isSpaceEmpty(row, column);
        
        const symbol = activePlayer.symbol;

        if ( Gameboard.markSpace(row, column, symbol) ) {
            console.log(`${activePlayer.name} has selected space (${row}, ${column})`);
            switchPlayerTurn();
            checkForTie();
            checkForWinner();
        } else {
            console.log('Invalid move. Please select another space.')
        }
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