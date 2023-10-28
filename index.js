// GAMEBOARD OBJECT
const gameboardObject =  (function () {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
	// let gameboardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

	function renderGameboard() {
        let gameboardSpaces = [];

		// create a loop that will iterate over each item in the gameboardArray
        for (let i = 0; i < gameboardArray.length; i++) {
            let gameboard = document.getElementById('gameboard');
            let space = document.createElement('div');

            space.setAttribute('id', `boardspace-${i}`);
            space.setAttribute('class', 'boardSpaces');
            space.textContent = gameboardArray[i];
            
            gameboard.appendChild(space);
            gameboardSpaces.push(space);
        };

        return gameboardSpaces;
	};

    // renders gameboard & assigns a variable to it for future reference
    let gameboardSpaces = renderGameboard();
    
	(function selectSpace() {        
        // let gameboardSpaces = renderGameboard();

        for (let i = 0; i < gameboardSpaces.length; i++) {
            let space = gameboardSpaces[i];
            space.addEventListener('click', () => {
                markSpace(space);
            });
        };

        return {
            selectSpace,
        }
    })();
    
	function markSpace(space) {
		// set innerHTML = to the current player's symbol

        // test: set the space's innerHTML to "X" (will update later to mark the space according to player)
        space.innerText = 'X';
	};

	function checkSpaceValidation() {
		// create an if...else statement to check if the selected space's innerHTML is === to a player's symbol
			// if the space has no mark call markSpace()
			// else return — do not mark the space
	};

    function clearBoard(space) {
        // space.innerText = 'O';
    };

    return { 
        renderGameboard,
        markSpace,
        clearBoard,
        // selectSpace,
    };
    
})();

// PLAYER OBJECTS
const playersObject = {
	player1: {
		// player 1 name:
		// player 1 symbol:
	},

	player2: {
		// player 2 name:
		// player 2 symbol:
	}
    
};

// GAME FLOW OBJECTS
const gameController = (function () {    
    function newGame() {
        gameboardObject.selectSpace();
        gameboardObject.renderGameboard();
    };

    return {
        newGame,
    }

})();

// gameController.newGame();