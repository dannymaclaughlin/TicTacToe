// gameboard object
const gameboardObject =  (function () {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
	// let gameboardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

	// render the contents of the gameboard array on the webpage
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
    
	// build functions that allow players to add marks to a specific spot on the board
    // function to select a space on the board
	function selectSpace(i) {
        let space = document.getElementById(`boardspace-${i}`);
        
        for(let i = 0; i < 9; i++) {
            space.addEventListener('click', () => {
                markSpace(space);
            });
        };
    
        
        return {
            space,
        };
    };
    
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
        selectSpace,
        clearBoard,
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
        gameboardObject.clearBoard();
        gameboardObject.renderGameboard();
    };

    return {
        newGame,
    }

})();

// gameboardObject.renderGameboard();
gameController.newGame();


const selectSpace = (function() {
    // call function to select a space
    for(let i = 0; i < 9; i++) {
        gameboardObject.selectSpace(i);
    };

})();