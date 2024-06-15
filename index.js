// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function() {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],

        // test array. certain spots pre-marked to quickly satisfy a win condition for testing purposes—will remove later.
        // ['X', 'O', 'O'],
        // ['O', 'X', ''],
        // ['X', '', 'X'],

    ];

    function getBoard() {
        return board;
    }

    function getArrayElement(row, column) {
        return board[row][column];
    }

    function markSpace(row, column, symbol) {
        board[row][column] = symbol
    }

    return { getBoard, markSpace, getArrayElement }
})();

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
const GameController = (function() {
    let startingGameMessage = document.querySelector('.starting-game-message');
    let currentPlayerMessage = document.querySelector('.current-player-message');
    
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
            currentPlayerMessage.innerText = `${activePlayer.name}, select a space.`
            // sets startingGameMessage to an empty string once it switches player turn
            startingGameMessage.innerText = '';
            console.log(Gameboard.getBoard());
        } else {
            activePlayer = players[0];
            console.log(`${activePlayer.name}, select a space.`);
            currentPlayerMessage.innerText = `${activePlayer.name}, select a space.`
            // sets startingGameMessage to an empty string once it switches player turn
            startingGameMessage.innerText = '';
            console.log(Gameboard.getBoard());
        }
    }
    
    // returns current active player
    function getPlayer() {
        return activePlayer;
    }

    function setupEventListeners() {
        let boardspaces = document.querySelectorAll('.boardspace');

        boardspaces.forEach((space, index) => {
            space.addEventListener('click', function(event) {
                // Array.from() makes an array from the boardspaces nodelist
                // index.Of(event.target) gets the index of the event's target(which is the boardspace being clicked on)
                // let index = Array.from(boardspaces).indexOf(event.target);
                // Math.floor rounds down and returns the whole number less than or equal to the given number
                
                // then adds 1 to accound for 0 base indexing
                let row = Math.floor(index / 3) + 1;
                // modulo returns the remainder of the index number modulo 3 then adds 1 again to account for 0 basex indexing
                let column = (index % 3) + 1;
                console.log(`row: ${row}, column ${column}`)

                // row and column can now be used with selectSpace(row, column)'s parameters
                selectSpace(row, column);
            })
        })
    };

    function startGame() {
        // new game starting message
        console.log('Starting a new game of Tic Tac Toe...')
        startingGameMessage.innerText = 'Starting a new game of Tic Tac Toe...';
        // new game current player message
        console.log(`${activePlayer.name}, select a space.`)
        currentPlayerMessage.innerText = `${activePlayer.name}, select a space.`
        // logs the board at the start of the game — will be removed.
        console.log(Gameboard.getBoard());
        setupEventListeners();
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
            console.log(`${activePlayer.name} has selected board array element [${row}, ${column}]`)
            DisplayLogic.renderBoardArray();
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
            startingGameMessage.innerText = 'Space is already occupied.'
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

    function checkForTie(row, column) {
        // logic to check for a game ending in a tie
        if (checkForWinner()) {
            return false;
        }

        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 3; column++) {
                if (isSpaceEmpty(row, column)) {
                    return false;
                }
            }
        }

        console.log('TIE!!!')
        return true;
    }

    function gameOver() {
        // logic to end a game
        console.log('GAME OVER!')
        console.log(Gameboard.getBoard());
        space.removeEventListener('click')
    }

    return { startGame, activePlayer, getPlayer, switchPlayerTurn, selectSpace, isSpaceEmpty };
})();

const DisplayLogic = (function() {
    // returns the gameboard array's element(string/symbol) at the specified row and column
    function getArrayElement(row, column) {
        return Gameboard.getArrayElement(row, column);
    }
    
    function renderBoardArray(row, column) {
        const boardspaces = document.querySelectorAll('.boardspace'); // selects the all of the .boardspace elements in html file

        // loops through each array element in the board array
        let board = Gameboard.getBoard();
        let boardspaceStart = 0;
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[row].length; column++) {
                for (let boardspace = boardspaceStart; boardspace < boardspaces.length; boardspace++) {
                    // console.log used for testing — will be removed.
                    // console.log(`boardspace ${boardspace} is marked by ${getArrayElement(row, column)} at [${row}][${column}]`)

                    boardspaces[boardspace].innerText = `${getArrayElement(row, column)}`;

                    boardspaceStart = boardspace +1;
                    break; // breaks out of this inner loop after one iteration
                }
            }
        }
    }

    return { renderBoardArray, getArrayElement }
})();

GameController.startGame();