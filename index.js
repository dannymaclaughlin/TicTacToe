// GAMEBOARD OBJECT
const gameboard = (function () {
    // a nested array(array of arrays) containing cells that make up a 2d gameboard
    const board = ['', '', '', '', '', '', '', '', ''];

    // constructor function that creates and returns an object with the addMark and getValue methods
    function cell() {
        let value = '';
    
        const addMark = (player) => {
            value = player;
        };
    
        const getValue = () => value;
    
        return {
            addMark,
            getValue,
        };
    };

    // returns the gameboard and assigns it to the getBoard variable
    const getBoard = () => board;

    // prints to the console the returned value of each cell on the board
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => {
            return row.map((cell) => {
                return cell.getValue();
            });
        });
        
        // prints 2d board of cell objects to the console
        console.log(boardWithCellValues);
    }

    return { 
        getBoard,
        printBoard, 
    };
})();

// PLAYERS OBJECT
// IIFE factory function that creates player objects with name and symbol parameters.
const players = (function () {
    function createPlayer (name, symbol) {
        // const playerName = name;
        // const playerSymbol = symbol;
        return {
            name,
            symbol,
        };
    };

    // creates two player objects using the factory function
    const player1 = createPlayer('player 1', 'X');
    const player2 = createPlayer('player 2', 'O');

    return {
        player1,
        player2,
    };
})();

// GAMECONTROLLER OBJECT
const gameController = (function () {
    // sets player1 as the default first player
    let activePlayer = players.player1;
    
    // function to switch player turn
    function switchPlayerTurn() {
        activePlayer = activePlayer === players.player1 ? players.player2 : players.player1;
    };

    function getActivePlayer() {
        return activePlayer;
    };

    let rowIndex;
    let colIndex;
    
    // function that prompts the user to select a row and column, assigns the user inputted value to the 
    // 'row' and 'col' variables, converts the string into a number and subtracts 1(as to align with zero based indexing)
    function getUserMove() {
        const row = prompt('SELECT ROW (1, 2, or 3)');
        const col = prompt('SELECT COLUMN (1, 2, or 3)');

        rowIndex = parseInt(row) - 1;
        colIndex = parseInt(col) - 1;

        return {
            rowIndex,
            colIndex,
        }
    }

    function markSpace() {
        const {rowIndex, colIndex} = gameController.getUserMove();
        const selectedCell = gameboard.getBoard()[rowIndex][colIndex];
        const activePlayer = gameController.getActivePlayer();

        if (selectedCell.getValue() === '') {
            selectedCell.addMark(activePlayer.symbol);
        }

        return {
            selectedCell,
            activePlayer,
        }
    };

    function printNewRound() {
        // prints the 2d board to the console
        gameboard.printBoard();
        // prints a message stating which player's turn it currently is to the console
        console.log(`${getActivePlayer().name}'s turn!`);
        const {rowIndex, colIndex} = gameController.getUserMove();
    };

    // method to start a new game
    function startGame() {
        printNewRound();
    }

    return {
        getUserMove,
        startGame,
        markSpace,
        activePlayer,
        rowIndex,
        colIndex,
    }
})();

// initialize game
gameController.startGame();