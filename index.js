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
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))

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

})();