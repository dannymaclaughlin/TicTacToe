// GAMEBOARD OBJECT
const gameboard = (function () {
    const board = [
        [cell(), cell(), cell()],
        [cell(), cell(), cell()],
        [cell(), cell(), cell()]
    ];

    function cell() {
        let value = '0';
    
        const addMark = (player) => {
            value = player;
        };
    
        const getValue = () => value;
    
        return {
            addMark,
            getValue,
        };
    };

    const getBoard = () => board;

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
const players = (function () {
    function createPlayer (name, symbol) {
        const playerName = name;
        const playerSymbol = symbol;
        return {
            name,
            symbol,
        };
    };

    const player1 = createPlayer('player 1', 'X');
    const player2 = createPlayer('player 2', 'O');

    return {
        player1,
        player2,
    };
})();

// GAMECONTROLLER OBJECT
const gameController = (function () {
    function getUserMove() {
        const row = prompt('SELECT ROW (1, 2, or 3)');
        const col = prompt('SELECT COLUMN (1, 2, or 3)');

        const rowIndex = parseInt(row) - 1;
        const colIndex = parseInt(col) -1;

        return {
            rowIndex,
            colIndex,
        }
    }

    return {
        getUserMove,
    }
})();