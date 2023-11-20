const gameboard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];

    for (let i = 0; i < board.length; i++) {
        board[i] = [];
    };
})();

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

const players = {

};

const gameController = (function () {

})();