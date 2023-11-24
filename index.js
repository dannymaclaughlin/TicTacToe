const gameboard = (function () {
    const board = [
        [cell(), cell(), cell()],
        [cell(), cell(), cell()],
        [cell(), cell(), cell()]
    ];

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

const players = {
    player1: {
        name: 'Player 1',
        symbol: 'X'
    },
    player2: {
        name: 'Player 2',
        symbol: 'O'
    }
};

const gameController = (function () {

})();