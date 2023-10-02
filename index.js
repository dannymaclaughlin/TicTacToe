const gameboard = (function() {
    const gameboard = ['', '', '', '', '', '', '', '', ''];
    // const gameboard = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];

    function initializeGameboard() {
        const cells = [];
        
        for(let i = 0; i < gameboard.length; i++) {
            const cell = document.getElementById(`cell-${i}`);
            cell.textContent = gameboard[i];
            cells.push(cell);
        };

        // cells.addEventListener('click', () => {
        //     console.log('hello');
        // })
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                console.log('hi');
            });
        });
    };
    
    return {
        initializeGameboard,
    };
})();

gameboard.initializeGameboard();

const player = (name) => {
    return { name };
};

let player1 = player('player 1');
let player2 = player('player 2');

const game = {

};