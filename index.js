// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function () {
    const board = [
        // certain spots pre-marked to quickly satisfy a win condition for testing purposes. will remove later.
        ['', '', ''],
        ['', '', ''],
        ['X', 'X', ''],
    ];

    function getBoard() {
        return board;
    }

    // function markSpace(row, column, symbol) {
    //     if ( board[row][column] === '' ) {
    //         board[row][column] = symbol;
    //         return true; // space was successfully marked
    //     } else {
    //         return false; // space is occupied
    //     }
    // }

    function markSpace(row, column, symbol) {
        board[row][column] = symbol
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
            console.log(`${activePlayer.name}, select a space.`);
            console.log(Gameboard.getBoard());
        } else {
            activePlayer = players[0];
            console.log(`${activePlayer.name}, select a space.`);
            console.log(Gameboard.getBoard());
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
            // if space is not available
            return false;
        } else {
            // if space is available
            return true;
        }
    }

    function selectSpace(row, column) {
        // changes from 0-indexed to 1-indexed for user input
        row = row - 1;
        column = column - 1;
        
        // executes isSpaceEmpty(row, column) and returns either true or false
        if (isSpaceEmpty(row, column)) {
            const symbol = activePlayer.symbol;
            Gameboard.markSpace(row, column, symbol)
            console.log(`${activePlayer.name} has selected space (${row}, ${column})`)
            if (checkForWinner()) {
                // WINNER   
                gameOver();
            } else if (checkForTie()) {
                // TIE
                gameOver();
            } else {
                switchPlayerTurn();
            }
        } else {
            console.log('SPACE IS NOT AVAILABLE. MAKE ANOTHER SELECTION.')
        }
    }

    function checkForWinner() {
        // logic to check if there is a winner
        if (
            // win conditions for 'X'
            Gameboard.getBoard()[0][0] === 'X' &&
            Gameboard.getBoard()[0][1] === 'X' &&
            Gameboard.getBoard()[0][2] === 'X'
            ||
            Gameboard.getBoard()[1][0] === 'X' &&
            Gameboard.getBoard()[1][1] === 'X' &&
            Gameboard.getBoard()[1][2] === 'X'
            ||
            Gameboard.getBoard()[2][0] === 'X' &&
            Gameboard.getBoard()[2][1] === 'X' &&
            Gameboard.getBoard()[2][2] === 'X'
            ||
            Gameboard.getBoard()[0][0] === 'X' &&
            Gameboard.getBoard()[1][0] === 'X' &&
            Gameboard.getBoard()[2][0] === 'X'
            ||
            Gameboard.getBoard()[0][1] === 'X' &&
            Gameboard.getBoard()[1][1] === 'X' &&
            Gameboard.getBoard()[2][1] === 'X'
            ||
            Gameboard.getBoard()[0][2] === 'X' &&
            Gameboard.getBoard()[1][2] === 'X' &&
            Gameboard.getBoard()[2][2] === 'X'
            ||
            Gameboard.getBoard()[0][0] === 'X' &&
            Gameboard.getBoard()[1][1] === 'X' &&
            Gameboard.getBoard()[2][2] === 'X'
            ||
            Gameboard.getBoard()[0][2] === 'X' &&
            Gameboard.getBoard()[1][1] === 'X' &&
            Gameboard.getBoard()[2][0] === 'X'
            ||
            
            // win conditions for 'O'
            Gameboard.getBoard()[0][0] === 'O' &&
            Gameboard.getBoard()[0][1] === 'O' &&
            Gameboard.getBoard()[0][2] === 'O'
            ||
            Gameboard.getBoard()[1][0] === 'O' &&
            Gameboard.getBoard()[1][1] === 'O' &&
            Gameboard.getBoard()[1][2] === 'O'
            ||
            Gameboard.getBoard()[2][0] === 'O' &&
            Gameboard.getBoard()[2][1] === 'O' &&
            Gameboard.getBoard()[2][2] === 'O'
            ||
            Gameboard.getBoard()[0][0] === 'O' &&
            Gameboard.getBoard()[1][0] === 'O' &&
            Gameboard.getBoard()[2][0] === 'O'
            ||
            Gameboard.getBoard()[0][1] === 'O' &&
            Gameboard.getBoard()[1][1] === 'O' &&
            Gameboard.getBoard()[2][1] === 'O'
            ||
            Gameboard.getBoard()[0][2] === 'O' &&
            Gameboard.getBoard()[1][2] === 'O' &&
            Gameboard.getBoard()[2][2] === 'O'
            ||
            Gameboard.getBoard()[0][0] === 'O' &&
            Gameboard.getBoard()[1][1] === 'O' &&
            Gameboard.getBoard()[2][2] === 'O'
            ||
            Gameboard.getBoard()[0][2] === 'O' &&
            Gameboard.getBoard()[1][1] === 'O' &&
            Gameboard.getBoard()[2][0] === 'O'
            ) {
            console.log(`WINNER! ${activePlayer.name} has won!`);
            return true;
        } else {
            return false;
        }
    }

    function checkForTie() {
        // logic to check for a game ending in a tie
    }

    function gameOver() {
        // logic to end a game
        console.log(Gameboard.getBoard());
    }

    return { startGame, activePlayer, getPlayer, switchPlayerTurn, selectSpace, isSpaceEmpty };
})();

GameController.startGame();