// GAMEBOARD OBJECT
const gameboard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];

    const boardspaces = document.querySelectorAll('.boardspace');

    boardspaces.forEach((space, index) => {
        board[index] = space;
        
        space.addEventListener('click', () => {
            console.log(`clicked on boardspace${index + 1}`);
            space.innerHTML = 'X'
            
            // use these to target specific spaces
                // console.log(space);
                // console.log(board[2]);
        })
    })
})();

// PLAYERS OBJECT

// GAMECONTROLLER OBJECT
const gameController = (function () {
 
})();

// initialize game
// gameController.startGame();