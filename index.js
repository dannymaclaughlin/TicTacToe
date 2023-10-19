// gameboard object
const gameboardObject =  (function () {
	// store the gameboard as an array
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
	// let gameboardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
	
    // variable that represents each individual space on the board
	// let gameboardSpace = document.getElementById('`cell-${i}`');

	// render the contents of the gameboard array on the webpage
	function renderGameboard() {
		// create an array to hold gameboard spaces and assign it to variable 'gameboard'
        let spaces = [];

		// create a loop that will iterate over each item in the gameboardArray
        for (let i = 0; i < gameboardArray.length; i++) {
            // grab gameboard id from the DOM and assign it to a variable
            let gameboard = document.getElementById('gameboard');
            // create a div(space) for each iteration on the gameboardArray and assign it to a variable
            let spaces = document.createElement('div');
            // assign an ID and a class to the newly created spaces
            spaces.setAttribute('id', `boardspace-${i}`);
            spaces.setAttribute('class', 'boardSpaces');
            // set gameboard spaces' textContent to the value of it's corresponding item from the gameboardArray
            spaces.textContent = gameboardArray[i];
            // append the newly created divs to spaces array
            gameboard.appendChild(spaces);
        };

	};
    
	// build functions that allow players to add marks to a specific spot on the board
    // function to select a space on the board
	function selectSpace(i) {
        let space = document.getElementById(`boardspace-${i}`);
        space.addEventListener('click', () => {
            // call on mark space function here?
            markSpace(space);
        });
        return {
            space,
        };
    };
    
	function markSpace(space) {
		// selectSpace(i);
		// set the space's innerHTML = to the current player's symbol

        // sets the space's inner text to "X" — will update later to mark the space according to player
        space.innerText = "X";
	};

	function checkSpaceValidation() {
		// create an if...else statement to check if the selected space's innerHTML is === to a player's symbol
			// if the space has no mark call markSpace()
			// else return — do not mark the space
	};

    return { 
        renderGameboard,
        selectSpace,
    };
    
})();

// object to store player objects
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

// object to control the flow of the game
const gameController = (function () {
	
})();

// call function to render gameboard
gameboardObject.renderGameboard();

// call function to select a space
for(let i = 0; i < 9; i++) {
    gameboardObject.selectSpace(i);
};