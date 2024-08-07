// GAMEBOARD OBJECT - DIRECTLY RELATED TO THE BOARD
const Gameboard = (function() {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    function getBoard() {
        return board;
    };

    function getBoardElements() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = '';
            };
        };
    };

    function getArrayElement(row, column) {
        return board[row][column];
    };

    function markSpace(row, column, symbol) {
        board[row][column] = symbol
    };

    return { getBoard, getBoardElements, getArrayElement, markSpace }
})();

// GAMECONTROLLER - OBJECT TO CONTROL THE FLOW OF THE GAME
const GameController = (function() {
    let topMessage = document.querySelector('.top-message');
    let bottomMessage = document.querySelector('.bottom-message');
    let board = Gameboard.getBoard();
    
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
            bottomMessage.innerText = `${activePlayer.name}, select a space.`
            // sets topMessage to an empty string once it switches player turn
            topMessage.innerText = '';
            console.log(Gameboard.getBoard());
        } else {
            activePlayer = players[0];
            console.log(`${activePlayer.name}, select a space.`);
            bottomMessage.innerText = `${activePlayer.name}, select a space.`
            // sets topMessage to an empty string once it switches player turn
            topMessage.innerText = '';
            console.log(Gameboard.getBoard());
        }
    }
    
    // returns current active player
    function getPlayer() {
        return activePlayer;
    }

    function setupEventListeners() {
        let boardspaces = document.querySelectorAll('.boardspace');
        let handlers = [];

        boardspaces.forEach((space, index) => {
            function handleClick(event) {
                let row = Math.floor(index / 3) + 1;
                let column = (index % 3) + 1;

                console.log(`row: ${row}, column ${column}`)

                selectSpace(row, column);

                if (checkForWinner()) {
                    removeEventListener();
                }
            }

            handlers.push( {space, handleClick} )

            space.addEventListener('click', handleClick);
        })

        function removeEventListener() {
            handlers.forEach(( {space, handleClick} ) => {
                space.removeEventListener('click', handleClick)
            })
        }
    };

    function startGame() {
        // new game starting message
        console.log('Starting a new game of Tic Tac Toe...')
        topMessage.innerText = 'Starting a new game of Tic Tac Toe...';
        // new game current player message
        console.log(`${activePlayer.name}, select a space.`)
        bottomMessage.innerText = `${activePlayer.name}, select a space.`
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
            Gameboard.markSpace(row, column, symbol);
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
            topMessage.innerText = 'Space is already occupied.'
        }
    }

    function clearBoard(row, column) {
        // function to reset the elements of the board array to empty strings
        let boardspaces = Gameboard.getBoardElements();
        console.log(boardspaces);
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
            bottomMessage.innerText = `WINNER! ${activePlayer.name} has won!`;
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
        topMessage.innerText = 'GAME OVER';
        console.log('GAME OVER!')
        console.log(Gameboard.getBoard());
        DisplayLogic.displayRestartButton();
    }

    return { startGame, activePlayer, getPlayer, switchPlayerTurn, selectSpace, isSpaceEmpty, clearBoard };
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

    function displayStartButton() {
        let topMessage = document.querySelector('.top-message');
        let startButton = document.createElement('button');
        startButton.classList.add('startButton');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', function() {
            GameController.startGame();
        })

        topMessage.appendChild(startButton);
    }

    function displayRestartButton() {
        let restartButtonArea = document.querySelector('.restart-button');
        let restartButton = document.createElement('button');
        restartButton.classList.add('restartButton');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', function(row, column) {
            // function that runs when the restart button is clicked
            GameController.clearBoard();
            renderBoardArray();
            GameController.startGame();
            restartButton.remove();
        })

        restartButtonArea.appendChild(restartButton);
    }


    return { renderBoardArray, getArrayElement, displayStartButton, displayRestartButton }
})();

DisplayLogic.displayStartButton();