// GAMEBOARD OBJECT
const gameboardObject =  (function () {
    let gameboardArray = [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
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
        for (let i = 0; i < gameboardSpaces.length; i++) {
            let space = gameboardSpaces[i];
            space.addEventListener('click', () => {
                markSpace(space, i);
            });
        };

        return {
            selectSpace,
        }
    })();
    
	function markSpace(space, index) {
		// function that will change the corresponding array(of the cell that was clicked)'s item innerText to an 'X' 

        // test: set the space's innerHTML to "X" (will update later to mark the space according to player)
        gameboardArray[index] = 'X';
	};

	function checkSpaceValidation() {
		// create an if...else statement to check if the selected space's innerHTML is === to a player's symbol
			// if the space has no mark call markSpace()
			// else return — do not mark the space
	};

    function clearBoard(space) {
        // space.innerText = 'O';
    };

    function updateBoard() {

    }

    return { 
        gameboardArray,
        renderGameboard,
        markSpace,
        clearBoard,
        updateBoard,
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
        gameboardObject.renderGameboard();
        gameboardObject.selectSpace();
    };

    return {
        newGame,
    }
})();