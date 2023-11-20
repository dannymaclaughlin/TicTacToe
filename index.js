// GAMEBOARD OBJECT
const gameboardObject = (function () {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];

	function renderGameboard() {
        let gameboard = document.getElementById('gameboard');
        gameboard.innerHTML = '';
        gameboardSpaces = [];

		// create a loop that will iterate over each item in the gameboardArray
        for (let i = 0; i < gameboardArray.length; i++) {
            let space = document.createElement('div');

            space.setAttribute('id', `boardspace-${i}`);
            space.setAttribute('class', 'boardSpaces');
            space.textContent = gameboardArray[i];
            
            gameboard.appendChild(space);
            gameboardSpaces.push(space);
        };

        selectSpace();
        return gameboardSpaces;
	};

    // renders gameboard & assigns it to a variable for future use
    gameboardSpaces = renderGameboard();
    
	function selectSpace() {
        for (let i = 0; i < gameboardSpaces.length; i++) {
            let space = gameboardSpaces[i];

            space.addEventListener('click', () => {
                markSpace(space, i);
            });
        };
    };
    
    selectSpace();
    
	function markSpace(space, index) {
        gameboardArray[index] = 'X';
        renderGameboard();
        selectSpace();
        console.log(gameboardObject.gameboardArray);
	};

	function checkSpaceValidation() {
		// create an if...else statement to check if the selected space's innerHTML is === to a player's symbol
			// if the space has no mark call markSpace()
			// else return — do not mark the space
	};

    function updateBoard() {

    }

    return { 
        gameboardArray,
        renderGameboard,
        markSpace,
        updateBoard,
        selectSpace,
    };
    
})();

// PLAYER OBJECTS
const playerObjects = {
	player1: {
		name: 'Player 1',
		symbol: 'X',
	},

	player2: {
        name: 'Player 2',
        symbol: 'O',
	},
};

// GAME FLOW OBJECTS
const gameController = (function () {

})();