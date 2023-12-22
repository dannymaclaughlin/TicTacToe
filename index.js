// GAMEBOARD OBJECT
const gameboard = (function () {
    // a nested array(array of arrays) containing cells that make up a 2d gameboard
    const board = [
        [cell(), cell(), cell()],
        [cell(), cell(), cell()],
        [cell(), cell(), cell()]
    ];

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

    // logs to the console the returned value of each cell on the board
    const printBoard = () => {
        // const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        const boardWithCellValues = board.map((row) => {
            return row.map((cell) => {
                return cell.getValue();
            });
        });
        

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
    // function that prompts the user to select a row and column, assigns the user inputted value to the 
    // 'row' and 'col' variables, converts the string into a number and subtracts 1(as to align with zero based indexing)
    function getUserMove() {
        const row = prompt('SELECT ROW (1, 2, or 3)');
        const col = prompt('SELECT COLUMN (1, 2, or 3)');

        const rowIndex = parseInt(row) - 1;
        const colIndex = parseInt(col) - 1;

        return {
            rowIndex,
            colIndex,
        }
    }

    // sets player1 as the default first player
    let activePlayer = players.player1;
    
    // function to switch player turn
    function switchPlayerTurn() {
        activePlayer = activePlayer === players.player1 ? players.player2 : players.player1;
    }

    function getActivePlayer() {
        return activePlayer;
    }

    function printNewRound() {
        gameboard.printBoard();
        console.log(`${getActivePlayer().name}'s turn. select a space by entering 'gameController.getUserMove()'!`);
    }

    // method to start a new game
    function startGame() {
        // prints gameboard to the console
        printNewRound();

        // decide initial player's turn

        // ask for that player's input
    }

    return {
        getUserMove,
        startGame,
        activePlayer,

    }
})();

// initialize game
gameController.startGame();